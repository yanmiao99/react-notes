import {PageContainer} from '@ant-design/pro-components';
import {Card, Typography} from 'antd';
import React from 'react';
import {FormattedMessage} from 'umi';


interface IList {
  href: string,
  name: string,
  id: string,
}

const list: [IList] = [
  {
    href: 'https://pro.ant.design/zh-CN/',
    name: 'antd 文档',
    id: 'antd-doc'
  },
  {
    href: 'https://ant.design/index-cn',
    name: 'antd pro 文档',
    id: 'antd-pro-doc'
  },
  {
    href: 'https://v3.umijs.org/zh-CN',
    name: 'umi 文档',
    id: 'umi-doc'
  }
]


const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        {
          list.map(item => {
            return (
              <div key={item.id}>
                <Typography.Text strong >
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    target="__blank"
                  >
                    <FormattedMessage id={item.id} defaultMessage={item.name}/>
                  </a>
                </Typography.Text>
              </div>
            )
          })
        }
      </Card>
    </PageContainer>
  );
}
  ;

  export default Welcome;
