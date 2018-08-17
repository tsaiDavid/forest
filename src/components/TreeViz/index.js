import React, { Component } from "react";
import * as d3 from "d3";
import "./index.css";

export default class TreeViz extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.createTree();
  }

  createTree() {
    // set the dimensions and margins of the diagram
    const margin = { top: 40, right: 90, bottom: 50, left: 90 };
    const width = 660 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    const treemap = d3.tree().size([width, height]);
  }

  render() {
    return <div ref={node => (this.node = node)} />;
  }
}
