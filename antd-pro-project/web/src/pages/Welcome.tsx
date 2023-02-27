import {PageContainer} from '@ant-design/pro-components';
import {Card, Typography} from 'antd';
import React from 'react';

interface IList {
  href: string,
  name: string,
}

const list: IList[] = [
  {
    href: 'https://pro.ant.design/zh-CN/',
    name: 'antd 文档',
  },
  {
    href: 'https://ant.design/index-cn',
    name: 'antd pro 文档',
  },
  {
    href: 'https://v3.umijs.org/zh-CN',
    name: 'umi 文档',
  }
]


const Welcome: React.FC = () => {
    return (
      <PageContainer>
        <Card>
          {
            list.map(item => {
              return (
                <div key={item.href}>
                  <Typography.Text strong>
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      target="__blank"
                    >
                      {item.name}
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
