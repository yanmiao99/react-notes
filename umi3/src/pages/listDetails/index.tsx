import React from 'react';
import {useRouteMatch, useParams, useLocation, useHistory, history} from 'umi';
import {Button} from "antd"


export default function ListDetails() {
  let match = useRouteMatch()
  let params = useParams()
  let location = useLocation()
  let historyInfo = useHistory()
  return (
    <div>
      我是详情页
      <p>match: {JSON.stringify(match.params)}</p>
      <p>params: {JSON.stringify(params)}</p>
      <p>location: {location.pathname}</p>
      <p>historyInfo: {JSON.stringify(historyInfo.location)}</p>
      <p>history: {JSON.stringify(history)}</p>
      <Button onClick={() => history.goBack()}>返回上一页</Button>
    </div>
  );
}
