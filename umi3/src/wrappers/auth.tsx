import {ReactChild, ReactFragment, ReactPortal} from 'react';
import {Redirect} from 'umi'
import {getRandomIntInclusive} from "@/utils/conmon"


export default (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {

  const isLogin = getRandomIntInclusive(0, 1)

  if (isLogin > 0.5) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login"/>;
  }
}
