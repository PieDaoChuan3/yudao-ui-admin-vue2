import request from '@/utils/request'

// 创建电影票订单
export function createOrder(data) {
  return request({
    url: '/cinema/order/create',
    method: 'post',
    data: data
  })
}

// 更新电影票订单
export function updateOrder(data) {
  return request({
    url: '/cinema/order/update',
    method: 'put',
    data: data
  })
}

// 删除电影票订单
export function deleteOrder(id) {
  return request({
    url: '/cinema/order/delete?id=' + id,
    method: 'delete'
  })
}

// 获得电影票订单
export function getOrder(id) {
  return request({
    url: '/cinema/order/get?id=' + id,
    method: 'get'
  })
}

// 获得电影票订单分页
export function getOrderPage(params) {
  return request({
    url: '/cinema/order/page',
    method: 'get',
    params
  })
}
// 导出电影票订单 Excel
export function exportOrderExcel(params) {
  return request({
    url: '/cinema/order/export-excel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}