
import React ,{Component} from 'react';
import { Modal, Button } from 'antd';

import Stok from  '../form/stok'

export default class Modalstok extends Component{
  constructor(){
      super()
      this.state = {
          visible: false,
          name : ""
      }
  }
  componentDidMount(){
   
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
        <Button type="primary" onClick={this.showModal.bind(this,"New Stok")}>New Stok</Button>
        <Modal title={this.state.name} visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
          okText = "OK"
          cancelText = "Cancel"
        >
          <Stok action={this.props.action} status="add" update_parent={this.props.update_parent}/>
        </Modal>
      </div>
    );
  }
};
