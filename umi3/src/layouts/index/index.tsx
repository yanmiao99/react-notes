import { ReactChild, ReactFragment, ReactPortal } from "react"

export default (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <div style={{padding: 20}}>
      <h1>登录成功页面</h1>
      { props.children }
    </div>
  )
}
