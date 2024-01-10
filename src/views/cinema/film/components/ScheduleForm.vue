<template>
  <div class="app-container">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        v-loading="formLoading"
        label-width="0px"
        :inline-message="true"
      >
        <el-table :data="formData" class="-mt-10px">
          <el-table-column label="序号" type="index" width="100" />
          <el-table-column align="center" fixed="right" label="操作" width="60">
            <template v-slot="{ $index }">
              <el-link @click="handleDelete($index)">—</el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <el-row justify="center" class="mt-3">
        <el-button @click="handleAdd" round>+ 添加电影场次</el-button>
      </el-row>
  </div>
</template>

<script>
  import * as FilmApi from '@/api/cinema/film';
  export default {
    name: "ScheduleForm",
    components: {
    },
    props:[
      'fId'
    ],// 电影id（主表的关联字段）
    data() {
      return {
        // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
        formLoading: false,
        // 表单参数
        formData: [],
        // 表单校验
        formRules: {
        },
      };
    },
    watch:{/** 监听主表的关联字段的变化，加载对应的子表数据 */
      fId:{
        handler(val) {
          // 1. 重置表单
              this.formData = []
          // 2. val 非空，则加载数据
          if (!val) {
            return;
          }
          try {
            this.formLoading = true;
            // 这里还是需要获取一下 this 的不然取不到 formData
            const that = this;
            FilmApi.getScheduleListByFId(val).then(function (res){
              that.formData = res.data;
            })
          } finally {
            this.formLoading = false;
          }
        },
        immediate: true
      }
    },
    methods: {
          /** 新增按钮操作 */
          handleAdd() {
            const row = {
                                id: undefined,
            }
            row.fId = this.fId;
            this.formData.push(row);
          },
          /** 删除按钮操作 */
          handleDelete(index) {
            this.formData.splice(index, 1);
          },
      /** 表单校验 */
      validate(){
        return this.$refs["formRef"].validate();
      },
      /** 表单值 */
      getData(){
        return this.formData;
      }
    }
  };
</script>