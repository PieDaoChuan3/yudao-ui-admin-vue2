import request from '@/utils/request'

// 创建电影场次
export function createSchedule(data) {
  return request({
    url: '/cinema/schedule/create',
    method: 'post',
    data: data
  })
}

// 更新电影场次
export function updateSchedule(data) {
  return request({
    url: '/cinema/schedule/update',
    method: 'put',
    data: data
  })
}

// 删除电影场次
export function deleteSchedule(id) {
  return request({
    url: '/cinema/schedule/delete?id=' + id,
    method: 'delete'
  })
}

// 获得电影场次
export function getSchedule(id) {
  return request({
    url: '/cinema/schedule/get?id=' + id,
    method: 'get'
  })
}

// 获得电影场次分页
export function getSchedulePage(params) {
  return request({
    url: '/cinema/schedule/page',
    method: 'get',
    params
  })
}
// 导出电影场次 Excel
export function exportScheduleExcel(params) {
  return request({
    url: '/cinema/schedule/export-excel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}