import React from "react";
import { Link } from "react-router";
import MenuButton from "../../components/MenuButton/MenuButton.js";

import "./EtceteraPage.css";

export default class EtceteraPage extends React.Component {
  render() {
    return (
      <div className="etceteraPage">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <h1>
          Хобби
        </h1>
        <p className="etceteraPage__heading">Пишу музыку и орудую паялинком:</p>

        <div className="etceteraPage__album-wrapper">
          <div className="etceteraPage__album">
            <a className="etceteraPage__album-link" href="https://dolgova.bandcamp.com/album/flux-infinite">
              <img className="etceteraPage__album-img" src="https://f4.bcbits.com/img/a4173399201_10.jpg" alt="" />
            </a>
            <p className="etceteraPage__album-text">Dolgova - Flux Infinite LP 2013</p>
            <p className="etceteraPage__album-text-small">#electro #synth #retrowave #8bit #noise #amb #psychedelic</p>
          </div>
          <div className="etceteraPage__album">
            <a className="etceteraPage__album-link" href="https://handler.bandcamp.com/releases">
              <img className="etceteraPage__album-img" src="https://f4.bcbits.com/img/a2652997400_10.jpg" alt="" />
            </a>
            <p className="etceteraPage__album-text">Handler - A Key to Unlock EP 2015</p>
            <p className="etceteraPage__album-text-small">#post-post-industrial #cinematic #bass #dark #noise #synth</p>
          </div>
        </div>
        <div className="etceteraPage__videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HS0HUDqgmYE" frameBorder="0" />
        </div>
      </div>
    );
  }
}
