import request from '@/utils/request'

// 创建电影票销售统计id
export function createStatistics(data) {
  return request({
    url: '/cinema/statistics/create',
    method: 'post',
    data: data
  })
}

// 更新电影票销售统计id
export function updateStatistics(data) {
  return request({
    url: '/cinema/statistics/update',
    method: 'put',
    data: data
  })
}

// 删除电影票销售统计id
export function deleteStatistics(id) {
  return request({
    url: '/cinema/statistics/delete?id=' + id,
    method: 'delete'
  })
}

// 获得电影票销售统计id
export function getStatistics(id) {
  return request({
    url: '/cinema/statistics/get?id=' + id,
    method: 'get'
  })
}

// 获得电影票销售统计id分页
export function getStatisticsPage(params) {
  return request({
    url: '/cinema/statistics/page',
    method: 'get',
    params
  })
}
// 导出电影票销售统计id Excel
export function exportStatisticsExcel(params) {
  return request({
    url: '/cinema/statistics/export-excel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}