import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import ReactDOM from 'react-dom';

export default class Mesh extends React.Component {
  render() {
    return (
      <mesh scale={this.props.scale} position={this.props.position} rotation={this.props.rotation}>

        <planeGeometry width={this.props.width} height={this.props.height} />
        <materialResource resourceId={this.props.resId} />
      </mesh>
    );
  }
}
