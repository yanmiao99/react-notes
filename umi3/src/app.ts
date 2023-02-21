// 权限校验
import {history} from "umi";
import {getRandomIntInclusive} from "./utils/conmon"

export const render = async (olbRender: () => void) => {
  // 校验地址
  // const {isLogin} = await request('/umi/auth')

  const isLogin = getRandomIntInclusive(0, 1)


  if (isLogin > 0.5) {
    history.push("/login")
  }

  // 最少需要被调用一次 , 因为这个方法是把react 的render 函数进行重写
  olbRender()
}
