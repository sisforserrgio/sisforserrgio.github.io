import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuButton from './MenuButton/MenuButton.js';

import * as itemClick from '../redux/actions/itemClick';

import './Navigation.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onBtnColorChange = colorValue => {
      let navagitonColors = {
        menuToggle: true,
        colorLine: { r: 0.27, g: 0.02, b: 0.04 },
        colorBackground: { r: colorValue, g: 0.02, b: 0.04 }
      };
      this.props.navigationActions.itemClick(navagitonColors);
    };
  }
  render() {
    return (
      <nav className="navigation">

        <Link to="/">
          <MenuButton id={this.props.route.id} title={this.props.route.title} icon={"✖"}/>
        </Link>
        <ul className="navigation__menu-list">
          <li onClick={() => this.onBtnColorChange(0.4)}>
            <Link to="/">Главная</Link></li>
          <li onClick={() => this.onBtnColorChange(0.1)}>
            <Link to="bio">Био</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.3)}>
            <Link to="skills">Навыки</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.5)}>
            <Link to="projects">Работы</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.7)}>
            <Link to="contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return { navigationActions: bindActionCreators(itemClick, dispatch) };
}

export default connect(null, mapDispatchToProps)(Navigation);
