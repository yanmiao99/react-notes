import React from 'react';
import styles from './index.less';
import {Button} from "antd"

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Page home</h1>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
