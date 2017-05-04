import React from 'react';
import { Link } from 'react-router';

import './MenuButton.css';

export default class MenuButton extends React.Component {
  render() {
    return (
      <div className="menu-button">
        <div className="menu-button-wraper">
          <div className="menu-button-block1 flex-valign">
            <div className="menu-button__icon"><b>{this.props.icon || "≡"}</b></div>
          </div>
          <div className="menu-button-block2 ">
            {this.props.id}
            <div className="menu-button-block3">
              <div className="menu-button-block3a">{this.props.title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
