import request from "@/utils/request";

export function postLogin(params: any) {
  return request({
    method: 'post',
    url: '/login',
    data: params,
  })
}
