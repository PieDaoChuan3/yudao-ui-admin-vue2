<template>
  <div class="app-container">
    <!-- 对话框(添加 / 修改) -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="45%" v-dialogDrag append-to-body>
      <el-form ref="formRef" :model="formData" :rules="formRules" v-loading="formLoading" label-width="100px">
                    <el-form-item label="影片名称" prop="name">
                      <el-input v-model="formData.name" placeholder="请输入影片名称" />
                    </el-form-item>
                    <el-form-item label="分类" prop="classify">
                      <el-input v-model="formData.classify" placeholder="请输入分类" />
                    </el-form-item>
      </el-form>
                  <!-- 子表的表单 -->
          <el-tabs v-model="subTabsName">
                <el-tab-pane label="电影场次" name="schedule">
                  <ScheduleForm ref="scheduleFormRef" :f-id="formData.id" />
                </el-tab-pane>
          </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm" :disabled="formLoading">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import * as FilmApi from '@/api/cinema/film';
          import ScheduleForm from './components/ScheduleForm.vue'
  export default {
    name: "FilmForm",
    components: {
                               ScheduleForm,
    },
    data() {
      return {
        // 弹出层标题
        dialogTitle: "",
        // 是否显示弹出层
        dialogVisible: false,
        // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
        formLoading: false,
        // 表单参数
        formData: {
                            name: undefined,
                            classify: undefined,
        },
        // 表单校验
        formRules: {
                        name: [{ required: true, message: '影片名称不能为空', trigger: 'blur' }],
                        classify: [{ required: true, message: '分类不能为空', trigger: 'blur' }],
        },
                              /** 子表的表单 */
             subTabsName: 'schedule'
      };
    },
    methods: {
      /** 打开弹窗 */
     async open(id) {
        this.dialogVisible = true;
        this.reset();
        // 修改时，设置数据
        if (id) {
          this.formLoading = true;
          try {
            const res = await FilmApi.getFilm(id);
            this.formData = res.data;
            this.title = "修改影片";
          } finally {
            this.formLoading = false;
          }
        }
        this.title = "新增影片";
              },
      /** 提交按钮 */
      async submitForm() {
        // 校验主表
        await this.$refs["formRef"].validate();
                          // 校验子表
                    try {
                                            await this.$refs['scheduleFormRef'].validate();
                    } catch (e) {
                      this.subTabsName = 'schedule';
                      return;
                    }
        this.formLoading = true;
        try {
          const data = this.formData;
                    // 拼接子表的数据
              data.schedules = this.$refs['scheduleFormRef'].getData();
          // 修改的提交
          if (data.id) {
            await FilmApi.updateFilm(data);
            this.$modal.msgSuccess("修改成功");
            this.dialogVisible = false;
            this.$emit('success');
            return;
          }
          // 添加的提交
          await FilmApi.createFilm(data);
          this.$modal.msgSuccess("新增成功");
          this.dialogVisible = false;
          this.$emit('success');
        } finally {
          this.formLoading = false;
        }
      },
                      /** 表单重置 */
      reset() {
        this.formData = {
                            name: undefined,
                            classify: undefined,
        };
        this.resetForm("formRef");
      }
    }
  };
</script>