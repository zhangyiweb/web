/*
 * @Descripttion: 
 * @Date: 2022-04-06 11:41:42
 */
import request from '../utils/request'

export function registered(data) {
  return request({
    url: '',
    method: 'post',
    data: data
  })
}

export function basicInfogetById(basicInfoId) {
  return request({
    url: `${basicInfoId}`,
    method: 'get',
  })
}