import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuButton from '../../components/MenuButton/MenuButton.js';

import * as itemClick from '../../redux/actions/itemClick';
import * as itemClickGeometry from '../../redux/actions/itemClickGeometry';

import './Navigation.css';

class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onBtnGeometryShift = newValue => {
      let geometry = { width: newValue };
      this.props.actions.geometryChangeAction.itemClickGeometry(geometry);
    };

    this.onBtnColorChange = (colorBgValue, colorLineValueR, colorLineValueG, colorLineValueB) => {
      let navagitonColors = {
        menuToggle: true,
        colorLine: { r: colorLineValueR, g: colorLineValueG, b: colorLineValueB },
        colorBackground: { r: colorBgValue, g: 0.02, b: 0.04 }
      };
      this.props.actions.colorChangeAction.itemClick(navagitonColors);
    };
  }
  render() {
    return (
      <nav className="navigation">

        <Link to="/">
          <MenuButton id={this.props.route.id} title={this.props.route.title} icon={'✖'} />
        </Link>
        <ul className="navigation__menu-list">
          <li onClick={() => this.onBtnColorChange(0.3, 0.1, 0.02, 0.04)}>
            <Link to="/">Главная</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.25, 0.35, 0.02, 0.04)}>
            <Link to="bio">Био</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.4, 0.3, 0.02, 0.04)}>
            <Link to="skills">Навыки</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.7, 0.67, 0.02, 0.04)}>
            <Link to="contacts">Контакты</Link>
          </li>
          <li onClick={() => this.onBtnColorChange(0.1, 1, 0.1, 0.4)}>
            <Link to="etc">Прочее</Link>
          </li>
          <li>
            <Link to="vr">
              <div className="home__vr">
                <img className="home__vr-img_red" src="http://pcgamingwiki.com/images/thumb/3/3c/Editor_Icon_-_VR.svg/120px-Editor_Icon_-_VR.svg.png" alt="" />
                <img className="home__vr-img_blue" src="http://pcgamingwiki.com/images/thumb/3/3c/Editor_Icon_-_VR.svg/120px-Editor_Icon_-_VR.svg.png" alt="" />
                <img className="home__vr-img" src="http://pcgamingwiki.com/images/thumb/3/3c/Editor_Icon_-_VR.svg/120px-Editor_Icon_-_VR.svg.png" alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      colorChangeAction: bindActionCreators(itemClick, dispatch),
      geometryChangeAction: bindActionCreators(itemClickGeometry, dispatch)
    }
  };
}

export default connect(null, mapDispatchToProps)(Navigation);

// <li onClick={() => this.onBtnColorChange(0.5, 0.6, 0.02, 0.04)}>
// <Link to="projects">Опыт</Link>
//{' '}
// </li>
