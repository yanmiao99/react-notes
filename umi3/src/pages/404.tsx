import React from 'react';
import {history} from 'umi';
import {Button} from "antd"

export default function PageDoesNotExist() {
  const goToListPage = () => {
    history.goBack()
  }
  return (
    <div>
      404
      <Button type='primary' onClick={goToListPage}>返回主页</Button>
    </div>
  );
}
