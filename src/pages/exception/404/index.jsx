import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';
export default () => (
  <Result
    status="404"
    title="404"
    style={{
      background: 'none',
    }}
    subTitle="对不起，您访问的页面不存在。"
    extra={
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);
