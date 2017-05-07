import React from "react";
import { Link } from "react-router";
import MenuButton from "../../components/MenuButton/MenuButton.js";

import "./SkillsPage.css";

export default class SkillsPage extends React.Component {
  render() {
    return (
      <div className="skillsPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="skillsPage__main-text">

          <h1>Навыки</h1>
          <span className="skillsPage__span">
            <b> ES5/ES6</b>
          </span>
          <br />
          <span className="skillsPage__span"><b> React JSX Redux Router etc.</b> <b>Three.js</b> <b>jQuery</b> </span>
          <br />
          <span className="skillsPage__span"><b> SVG</b> (анимация, inline, фреймворки)</span>
          <br />
          <span className="skillsPage__span">
            <b> HTML5 CSS3 </b>(анимация, фреймоврки, пост/пре-процессоры на ваш выбор) <b>BEM</b>
          </span>
          <br />
          <span className="skillsPage__span"><b> Npm Git Yarn Webpack Gulp</b> Node(Express) - изучаю</span>
          <br />
          <span className="skillsPage__span"><b> Jira Confluence Redmine Remedy Bitrix Github GitLab Slack</b></span>
          <br />
          <span className="skillsPage__span"><b> PS Zeplin Sketch</b></span>
        </div>
      </div>
    );
  }
}
