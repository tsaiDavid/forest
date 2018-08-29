// import React, { Component } from "react";
// import { Form, Input, Button } from "antd";
// import { deserialize } from "../deserialize";
// import TreeViz from "../TreeViz";

// const FormItem = Form.Item;
// // Level order traversal
// export default class TreeInput extends Component {
//   constructor() {
//     super();
//     this.state = {
//       treeData: "",
//       tree: null
//     };
//   }

//   makeTree = () => {
//     this.setState({
//       tree: deserialize(JSON.parse(this.state.treeData))
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Form>
//           <FormItem>
//             <Input
//               onChange={e => {
//                 this.setState({ treeData: e.target.value });
//               }}
//               placeholder="Tree to serialize: '[1, 2, null, 3]'"
//             />
//           </FormItem>
//           <FormItem wrapperCol={{ span: 12, offset: 5 }}>
//             <Button type="primary" onClick={this.makeTree}>
//               Submit
//             </Button>
//           </FormItem>
//         </Form>
//         {/* <TreeViz data={deserialize([1, null, 2, 3])} /> */}
//       </div>
//     );
//   }
// }
