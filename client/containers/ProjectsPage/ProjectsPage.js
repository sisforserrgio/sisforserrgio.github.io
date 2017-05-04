import React from 'react';
import { Link } from 'react-router';
import MenuButton from '../../components/MenuButton/MenuButton.js';

import './ProjectsPage.css';

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div className="ProjectsPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <h1>
          Опыт
        </h1>
      </div>
    );
  }
}
