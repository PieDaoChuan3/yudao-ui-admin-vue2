import request from '@/utils/request'

// 创建影片
export function createFilm(data) {
  return request({
    url: '/cinema/film/create',
    method: 'post',
    data: data
  })
}

// 更新影片
export function updateFilm(data) {
  return request({
    url: '/cinema/film/update',
    method: 'put',
    data: data
  })
}

// 删除影片
export function deleteFilm(id) {
  return request({
    url: '/cinema/film/delete?id=' + id,
    method: 'delete'
  })
}

// 获得影片
export function getFilm(id) {
  return request({
    url: '/cinema/film/get?id=' + id,
    method: 'get'
  })
}

// 获得影片分页
export function getFilmPage(params) {
  return request({
    url: '/cinema/film/page',
    method: 'get',
    params
  })
}
// 导出影片 Excel
export function exportFilmExcel(params) {
  return request({
    url: '/cinema/film/export-excel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// ==================== 子表（电影场次） ====================
  
    // 获得电影场次列表
    export function getScheduleListByFId(fId) {
      return request({
        url: `/cinema/film/schedule/list-by-f-id?fId=` + fId,
        method: 'get'
      })
    }
  