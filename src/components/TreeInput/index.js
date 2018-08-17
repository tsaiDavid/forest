import React, { Component } from "react";
import { Form, Input } from "antd";

const FormItem = Form.Item;
// Level order traversal
export default class TreeInput extends Component {
  constructor() {
    super();
    this.state = {
      treeData: ""
    };
  }

  render() {
    return (
      <Form>
        <FormItem>
          <Input
            onChange={e => {
              this.setState({ treeData: e.target.value });
            }}
            placeholder="Tree to serialize: '[1, 2, null, 3]'"
          />
        </FormItem>
      </Form>
    );
  }
}
