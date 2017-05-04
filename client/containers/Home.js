import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import MenuButton from '../components/MenuButton/MenuButton.js';

import * as timeOfDay from '../redux/actions/timeOfDay';

import './Home.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getTime = () => {
      let date = new Date();
      let currentHour = date.getHours();
      return currentHour;
    };
    this.getTimeOfDay = () => {
      let currentHour = this.getTime();
      if ( 4 <= currentHour && currentHour < 12 ) {
        return "Доброе утро";
      }
      if ( 12 <= currentHour && currentHour<  17 ) {
        return "Добрый день";
      }
      if ( 17 <= currentHour && currentHour < 21 ) {
        return "Добрый вечер";
      }
      if ( 21 <= currentHour || currentHour < 4 ) {
        return "Доброй ночи";
      }
    };
    this.timeOfDay = this.getTimeOfDay();
    this.props.passTimeOfDay.timeOfDay(this.timeOfDay);
  }
  render() {
    return (
      <div className="home__main">

    <Link to="menu">
      <MenuButton id={this.props.route.id} title={this.props.route.title} /></Link>

            <h1 className="home__greeting">
            {this.timeOfDay}!<br/>
          Вас приветствует
          <br/>
            <span className="home__serge">Николаев&nbsp;Сергей</span>.
            <br/>
            Фронтенд разработчик к вашим услугам.
          </h1>

      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return { passTimeOfDay: bindActionCreators(timeOfDay, dispatch) };
}

export default connect(null, mapDispatchToProps)(Home);
