import React from "react";
import { Group } from "@vx/group";
import { Tree } from "@vx/hierarchy";
import { LinearGradient } from "@vx/gradient";
import { hierarchy } from "d3-hierarchy";
import { pointRadial } from "d3-shape";

import {
  LinkHorizontal,
  LinkVertical,
  LinkRadial,
  LinkHorizontalStep,
  LinkVerticalStep,
  LinkRadialStep,
  LinkHorizontalCurve,
  LinkVerticalCurve,
  LinkRadialCurve,
  LinkHorizontalLine,
  LinkVerticalLine,
  LinkRadialLine
} from "@vx/shape";

const data = {
  name: "T",
  children: [
    {
      name: "A",
      children: [
        { name: "A1" },
        {
          name: "C",
          children: [
            {
              name: "C1"
            },
            {}
          ]
        }
      ]
    },
    {
      name: "B",
      children: [{ name: "B1" }, { name: "B2" }]
    }
  ]
};

const Link = ({ link }) => {
  const color = "#ddd";
  return (
    <LinkVerticalLine data={link} stroke={color} strokeWidth="1" fill="none" />
  );
};

const primaryColor = "#5764c6";
const highlightColor = "#e06870";

const Node = ({ node, events }) => {
  const width = 55;
  const height = 23;
  const cornerRadius = 5;
  const textColor = "white";
  const color = node.data.highlighted ? highlightColor : primaryColor;

  return (
    <Group top={node.y} left={node.x}>
      <rect
        height={height}
        width={width}
        y={-height / 2}
        x={-width / 2}
        fill={color}
        stroke={color}
        strokeWidth={1}
        rx={cornerRadius}
        ry={cornerRadius}
      />
      <text
        dy={".33em"}
        fontSize={13}
        fontFamily={"Courier New"}
        textAnchor={"middle"}
        style={{ pointerEvents: "none" }}
        fill={textColor}
      >
        {node.data.name}
      </text>
    </Group>
  );
};
export default class extends React.Component {
  state = {
    layout: "cartesian",
    orientation: "vertical",
    linkType: "line",
    stepPercent: 0.5
  };

  render() {
    const {
      // data,
      width,
      height,
      events = false,
      margin = {
        top: 30,
        left: 30,
        right: 30,
        bottom: 30
      }
    } = this.props;
    const { layout, orientation, linkType, stepPercent } = this.state;

    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    let origin;
    let sizeWidth;
    let sizeHeight;

    origin = { x: 0, y: 0 };
    sizeWidth = innerWidth;
    sizeHeight = innerHeight;

    return (
      <svg width={width} height={height}>
        <Tree
          top={30}
          left={30}
          root={hierarchy(data)} // this.props.data
          size={[1000, 400]}
          nodeComponent={Node}
          linkComponent={Link}
        />
      </svg>
    );
  }
}
