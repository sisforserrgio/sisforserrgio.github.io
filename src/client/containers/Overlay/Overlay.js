import React from "react";
import React3 from "react-three-renderer";
import * as THREE from "three";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as TWEEN from "es6-tween";

import Mesh from "./Mesh.js";

import "./Overlay.css";
class Overlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.meshQuantity = 60;
    this.geometry = { height: 0.03, width: this.props.newWidth };
    this.colorLine = { r: 0.27, g: 0.02, b: 0.04 };
    this.colorSiteStart = { r: 0, g: 0.02, b: 0.04 };
    this.cameraPosition = new THREE.Vector3(0, 0, 5);
    this.meshPositions = [];
    this.fov = { fovOne: 90 };
    this.angle = { angleOne: 1.5, angleTwo: 0 };
    this._generateMeshes();
    this._resetGroupPosition();
    this.o = 40001;

    this.state = {
      groupRotation: new THREE.Euler(0, 0, 0.45),
      groupPosition: new THREE.Vector3(-25, -25, 0),
      scale: new THREE.Vector3(0.1, 1, 1)
    };
    this.startSiteTween = new TWEEN.Tween(this.colorSiteStart).to({ r: 0.4 }, 2000).repeat(0).start();
    this.animateMeshesWidthTween = new TWEEN.Tween(this.angle)
      .to({ angleTwo: 1 }, 10000)
      .repeat(Infinity)
      .yoyo(true)
      .easing(TWEEN.Easing.Back.Out)
      .delay(1300)
      .start();
    this.fovTween = new TWEEN.Tween(this.fov)
      .to({ fovOne: 120 }, 20000)
      .repeat(Infinity)
      .yoyo(true)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .start();

    this._onAnimate = () => {
      this.setState({
        scale: new THREE.Vector3(0.001 + this.angle.angleTwo * 150, 1, 1),
        groupPosition: new THREE.Vector3(this.state.groupPosition.x + 0.07, this.state.groupPosition.y + 0.04, 0)
      });
      // this._animateMeshesWidth();
      TWEEN.update();
    };
  }

  componentWillReceiveProps(nextProps) {
    // let widthGeometryTween = new TWEEN.Tween(this.geometry).to({ width: this.props.newWidth }, 1000).start();
    let menuColorTween = new TWEEN.Tween(this.colorSiteStart).to({ r: nextProps.colorBackground.r }, 1000).start();
    let lineColorTween = new TWEEN.Tween(this.colorLine)
      .to({ r: nextProps.colorLine.r, g: nextProps.colorLine.g, b: nextProps.colorLine.b }, 2000)
      .start();
  }

  _resetGroupPosition() {
    setInterval(() => {
      this.state.groupPosition = new THREE.Vector3(-25, -25, 0);
    }, 20001);
  }

  // _animateMeshesWidth() {
  //   this.geometry.width = this.angle.angleTwo * 70;
  // }

  _generateMeshes() {
    for (let i = 0; i < this.meshQuantity; i++) {
      this.angle.angleOne += 0.005;
      var multi = Math.abs(Math.cos(this.angle.angleOne));
      let mp = new THREE.Vector3(0, 0, 0);
      mp.x = 20 * Math.random();
      mp.y = 20 * Math.random();
      mp.z = 0;
      mp.id = i;
      this.meshPositions[i] = mp;
    }
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let colorLine = new THREE.Color(this.colorLine.r, this.colorLine.g, this.colorLine.b);
    let colorBackground = new THREE.Color(this.colorSiteStart.r, this.colorSiteStart.g, this.colorSiteStart.b);
    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
        clearColor={colorBackground}
        antialias={false}
        pixelRatio={0.8}
        onAnimate={this._onAnimate}
      >
        <resources>
          <meshBasicMaterial resourceId="materialONE" color={colorLine} />
        </resources>
        <scene>
          <perspectiveCamera
            name="camera"
            fov={this.fov.fovOne}
            aspect={width / height}
            near={0.1}
            far={50}
            position={this.cameraPosition}
          />
          <group position={this.state.groupPosition} rotation={this.state.groupRotation}>
            {this.meshPositions.map(meshPositions => (
              <Mesh
                key={meshPositions.id}
                position={meshPositions}
                resId={"materialONE"}
                width={0.9}
                height={this.geometry.height * meshPositions.id / 20}
                scale={this.state.scale}
              />
            ))}
          </group>
        </scene>
      </React3>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuToggle: state.itemClick.color.menuToggle,
    colorBackground: state.itemClick.color.colorBackground,
    colorLine: state.itemClick.color.colorLine,
    newWidth: state.itemClickGeometry.geometry.width
  };
}

export default connect(mapStateToProps)(Overlay);
