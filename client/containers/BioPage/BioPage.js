import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import MenuButton from '../../components/MenuButton/MenuButton.js';

import './BioPage.css';

class BioPage extends React.Component {
  render() {
    return (
      <div className="bioPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="bioPage__main-text">
          <h1>Обо мне</h1>
          <span className="bioPage__span">{this.props.currentTimeOfDay}!</span><br />
          <span className="bioPage__span">Меня зовут Сергей и я начинающий фронтенд разработчик.</span>
          <span className="bioPage__span">Окончил МТУСИ специалистом кафедры многоканальных телекоммуникационных систем.</span>
          <span className="bioPage__span">Поработав админом/инженером решил оставить это дело и окунулся с головой в веб разработку.</span>
          <br />
          <span className="bioPage__span">
            Я ищу интересную работу, связаную с: <br />
            - созданием живых/внушительных интерфейсов <br />
            - визулизацией данных, или с 2D/3D анимацией <br />
            - чем угодно в вебе, что
            использует силу современного <i><b>JavaScript </b></i>.
          </span>
          <br />
          <a className="bioPage__button" target="_blank" href="https://github.com/yyynnn">
            Github <img className="bioPage__button-github-logo" src="http://i.imgur.com/OCHWcon.png" alt="" />
          </a>
          <a className="bioPage__button" target="_blank" href="https://codepen.io/yyynnn/">
            Codepen <img className="bioPage__button-github-logo" src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png" alt="" />
          </a>
          <a className="bioPage__button" target="_blank" href="https://hh.ru/resume/ba9eb55bff033c6ad50039ed1f633477783753">Резюме на HeadHunter</a>

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
