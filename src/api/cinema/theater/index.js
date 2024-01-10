import request from '@/utils/request'

// 创建电影院
export function createTheater(data) {
  return request({
    url: '/cinema/theater/create',
    method: 'post',
    data: data
  })
}

// 更新电影院
export function updateTheater(data) {
  return request({
    url: '/cinema/theater/update',
    method: 'put',
    data: data
  })
}

// 删除电影院
export function deleteTheater(id) {
  return request({
    url: '/cinema/theater/delete?id=' + id,
    method: 'delete'
  })
}

// 获得电影院
export function getTheater(id) {
  return request({
    url: '/cinema/theater/get?id=' + id,
    method: 'get'
  })
}

// 获得电影院分页
export function getTheaterPage(params) {
  return request({
    url: '/cinema/theater/page',
    method: 'get',
    params
  })
}
// 导出电影院 Excel
export function exportTheaterExcel(params) {
  return request({
    url: '/cinema/theater/export-excel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}