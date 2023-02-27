import request from "@/utils/request";

export async function getCaptcha(params: any) {
  return request({
    method: 'get',
    url: '/smsCode',
    data: params,
  })
}



