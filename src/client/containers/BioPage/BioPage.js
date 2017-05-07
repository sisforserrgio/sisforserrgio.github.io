import React from "react";
import { Link } from "react-router";

import { connect } from "react-redux";

import MenuButton from "../../components/MenuButton/MenuButton.js";

import "./BioPage.css";

class BioPage extends React.Component {
  render() {
    return (
      <div className="bioPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="bioPage__main-text">
          <h1>Обо мне</h1>
          <span className="bioPage__span">{this.props.currentTimeOfDay}!</span>
          <br />
          <span className="bioPage__span">
            Меня зовут Сергей и&nbsp;я&nbsp;начинающий front-end разработчик.
          </span>
          <span className="bioPage__span">
            Окончил МТУСИ специалистом кафедры многоканальных телекоммуникационных систем, работал системным администратором,
            потом инженером Дата-центра, сейчас окончательно определился с&nbsp;профессиональными интересами на&nbsp;будущее
            и&nbsp;решил окунуться с&nbsp;головой в&nbsp;web-разработку. В данный момент работаю в City Business School.
          </span>
          <br />
          <span className="bioPage__span">
            Я ищу интересную работу, связанную с: <br />
            —&nbsp;созданием живых и&nbsp;внушительных интерфейсов;<br />
            —&nbsp;визуализацией данных, webVR, 2D/3D&nbsp;анимацией;<br />
            —&nbsp;чем угодно в&nbsp;web, что использует силу современного
            <i> <b>JavaScript </b></i>
            .
          </span>
          <br />
          <div className="bioPage__button-wrapper">
            <a className="bioPage__button" target="_blank" href="https://github.com/yyynnn">
              Github
              <img className="bioPage__button-github-logo" src="http://imgh.us/github-6-xxl.png" alt="" />
            </a>
            <a className="bioPage__button" target="_blank" href="https://codepen.io/yyynnn/">
              Codepen
              <img
                className="bioPage__button-github-logo"
                src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png"
                alt=""
              />
            </a>
          </div>
          <div className="bioPage__button-wrapper">
            <a className="bioPage__button" target="_blank" href="https://hh.ru/resume/ba9eb55bff033c6ad50039ed1f633477783753">
              CV на HH.ru
            </a>
            <a className="bioPage__button" target="_blank" href="https://moikrug.ru/yyynnn">
              CV на Moikrug.ru
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTimeOfDay: state.timeOfDay.time,
    store: state
  };
}

export default connect(mapStateToProps, null)(BioPage);
