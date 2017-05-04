import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuButton from '../components/MenuButton/MenuButton.js';
import Overlay from './Overlay/Overlay.js';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="overlay">
          <Overlay />
        </div>
        <div className="app__children">
          {this.props.children}
        </div>
      </div>
    );
  }
}
