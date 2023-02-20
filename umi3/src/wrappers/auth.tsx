import {ReactChild, ReactFragment, ReactPortal} from 'react';
import {Redirect} from 'umi'

export default (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
  }

  const isLogin = getRandomIntInclusive(0, 1)

  if (isLogin > 0.5) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login"/>;
  }
}
