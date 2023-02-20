import React, {useState} from "react"
import {connect} from "umi";
import {Button, Input} from 'antd'
import "./index.less"


const Dva = (props: { text: String, title: String, login: Boolean }) => {

  const handleChangeTitle = (props: any) => {
    props.dispatch({
      type: 'global/setTitle'
    })
  }

  const [textValue, setTextValue] = useState("");

  function handleInputChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setTextValue(event.target.value);
  }

  const handleChangeText = (props: any) => {
    props.dispatch({
      type: 'global/setText',
      payload: {
        text: textValue
      }
    })
  }

  const handleChangeLogin = (props: any) => {
    props.dispatch({
      type: 'global/setLogin',
      payload: {
        login: true
      }
    })
  }


  return (
    <>

      <h3>获取全局信息</h3>

      <p>text:{props.text}</p>
      <p>title:{props.title}</p>
      <p>login:{props.login ? '已登录' : '未登录'}</p>

      <hr/>

      <h3>修改信息</h3>
      <div className='bt20'>
        <Button type={'primary'} onClick={() => handleChangeTitle(props)}>修改title</Button>
      </div>

      <div className='bt20'>
        <Input placeholder="输入 text" value={textValue} onChange={handleInputChange}/>
        <Button type={'primary'} onClick={() => handleChangeText(props)}>修改text</Button>
      </div>

      <div className='bt20'>
        <Button type={'primary'} onClick={() => handleChangeLogin(props)}>修改login</Button>
      </div>
    </>
  )
}

// 定义接口
interface stateConnect {
  global: {
    text: string;
    title: string;
    login: boolean;
  };
  // 其他状态属性
}

const dvaState = connect((state: stateConnect) => ({
  // 全局变量
  text: state.global.text,
  title: state.global.title,
  login: state.global.login,
}))(Dva)


export default dvaState
