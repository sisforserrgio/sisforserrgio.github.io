import React from 'react';
import { Link } from 'react-router';
import MenuButton from '../../components/MenuButton/MenuButton.js';

import './VRpage.css';

export default class VRpage extends React.Component {
  render() {
    return (
      <div className="VRpage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="VRpage__main-text">
          <h1>VR-mode из каминг сун</h1>
        </div>
      </div>
    );
  }
}
