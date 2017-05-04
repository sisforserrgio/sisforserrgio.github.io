import React from 'react';
import { Link } from 'react-router';
import MenuButton from '../../components/MenuButton/MenuButton.js';

import './ContactsPage.css';

export default class ContactsPage extends React.Component {
  render() {
    return (
      <div className="contactsPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="contactsPage__main-text">
          <h1 className="contactsPage__heading">Свяжитесь со мной</h1>
          <a className="contactsPage__item contactsPage__phone" href="tel:+79164800779"><b>mob:</b> <br/>
          +7 916 48 00 779 </a>
          <br />
          <a className="contactsPage__item contactsPage__mail" href="mailto:redredseas@gmail.com"><b>mail:</b><br/>
            redredseas@gmail.com </a>
          <br />
          <a className="contactsPage__item contactsPage__telegram" target="_blank" href="https://t.me/SergioMagnificent"><b>telegram:</b> <br/>
            @SergioMagnificent </a>
          <p className="contactsPage__sub-heading">Отвечаю в telegram молниеносно</p>
        </div>
      </div>
    );
  }
}
