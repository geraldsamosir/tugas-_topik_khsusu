
import React ,{Component} from 'react';
import { Modal, Button } from 'antd';

import History from '../form/history'

export default class Modalhistoryout extends Component{
  constructor(){
      super()
      this.state = {
          visible: false,
          name : ""
      }
  }
  showModal(names) {
    this.setState({
      visible: true,
      name : names
    });
  }
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal.bind(this,"New Out")}>New Out</Button>
        <Modal title={this.state.name} visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
          okText = "OK"
          cancelText = "Cancel"
        >
        <History action={this.props.action} status_code={this.props.status_code} />
        </Modal>
      </div>
    );
  }
};
