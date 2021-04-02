import { Button, Result } from 'antd';
import React, { Component } from 'react';
import { history } from 'umi';


class NoFoundPage extends Component {
  state = {
    showPreson: false,
  };
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button style={{ display: this.state.showPreson ? '' : 'none' }} type="primary" onClick={() => history.push('/')}>
            Back Home
          </Button>
        }
      />);
  }
}

export default NoFoundPage;
