import React, {useState} from "react"
import {connect} from "umi";
import {Button, Input} from 'antd'
import "./index.less"


const Dva = (props: { text: String, title: String, login: Boolean, test: String, info: Object }) => {

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


  // 修改局部数据
  const handleChangeTest = (props: any) => {
    props.dispatch({
      type: 'dvaModel/setTest',
      payload: {
        test: '我是修改后的数据'
      }
    })
  }

  // 获取异步数据
  const handleGetInfo = (props: any) => {
    props.dispatch({
      type: 'dvaModel/getInfo'
    })
  }


  return (
    <>

      <h3>获取全局信息</h3>

      <p>text:{props.text}</p>
      <p>title:{props.title}</p>
      <p>login:{props.login ? '已登录' : '未登录'}</p>

      <hr/>

      <h3>修改全局信息</h3>
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

      <h3>获取局部数据</h3>
      <p>test:{props.test}</p>
      <Button type={'primary'} onClick={() => handleChangeTest(props)}>修改局部数据</Button>
      <p>异步数据 : {props.info ? JSON.stringify(props.info) : '暂无数据, 点击按钮获取'} </p>
      <Button type='primary' onClick={() => handleGetInfo(props)}>获取异步数据</Button>

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
  dvaModel: {
    test: string;
    info: object;
  }
  // 其他状态属性
}

const dvaState = connect((state: stateConnect) => ({
  // 全局变量
  text: state.global.text,
  title: state.global.title,
  login: state.global.login,
  // 局部变量
  test: state.dvaModel.test,
  info: state.dvaModel.info
}))(Dva)


export default dvaState
