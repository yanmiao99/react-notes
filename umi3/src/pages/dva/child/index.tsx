import React from "react"
import {useDispatch, useSelector} from "umi";
import {Button} from "antd"

interface stateConnect {
  global: {
    text: string;
    title: string;
    login: boolean;
  };
}

const Child = () => {

  const dispatch = useDispatch()
  const {title} = useSelector((state: stateConnect) => ({
    title: state.global.title,
  }))

  const handleChangeTitle = () => {
    dispatch({
      type: 'global/setTitle'
    })

  }

  return (
    <>
      <p> title : {title} </p>
      <Button type={'primary'} onClick={() => handleChangeTitle()}>点击修改title</Button>
    </>
  )
}


export default Child
