import React from 'react';
import { Link } from 'react-router';
import MenuButton from '../../components/MenuButton/MenuButton.js';

import './SkillsPage.css';

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
            <b>▪ ES5/ES6</b>
          </span>
          <br />
          <span className="skillsPage__span"><b>▪ React JSX Redux Router etc.</b> - могу, <b>Three.js</b> - умею, <b>WebGL</b> - учу, <b>jQuery</b> - могу</span>
          <br />
          <span className="skillsPage__span"><b>▪ SVG</b> (inline, фреймворки) - умею</span>
          <br />
          <span className="skillsPage__span"><b>▪ HTML5 CSS </b>(фреймоврки, пост/пре-процессоры на ваш выбор) - могу без фанатизма, <b>BEM</b> - пытаюсь</span>
          <br />
          <span className="skillsPage__span"><b>▪ Npm Git Yarn Webpack Gulp</b> - умею, Node(Koa, Express) - учу</span>
          <br />
          <span className="skillsPage__span"><b>▪ Jira Confluence Redmine Remedy Bitrix Github GitLab Slack</b> - знаем</span>
          <br />
          <span className="skillsPage__span"><b>▪ PS Zeplin Sketch</b> - знаем</span>
        </div>
      </div>
    );
  }
}
