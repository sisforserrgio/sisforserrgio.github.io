import React from 'react';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';

import App from '../containers/App.js';
import Home from '../containers/Home.js';
import BioPage from '../containers/BioPage/BioPage.js';
import JsPage from '../containers/SkillsPage/JsPage.js';
import SkillsPage from '../containers/SkillsPage/SkillsPage.js';
import ContactsPage from '../containers/ContactsPage/ContactsPage.js';
import ProjectsPage from '../containers/ProjectsPage/ProjectsPage.js';
import EtceteraPage from '../containers/EtceteraPage/EtceteraPage.js';
import VRpage from '../containers/VRpage/VRpage.js';

import Navigation from '../containers/Navigation/Navigation.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute id="00" title="SN_menu" component={Home} />
    <Route path="menu" id="01" title="SN_menu" component={Navigation} />
    <Route path="/bio" id="02" title="SN_bio" component={BioPage} />
    <Route path="/skills" id="03" title="SN_skills" component={SkillsPage} />
    <Route path="/contacts" id="04" title="SN_contacts" component={ContactsPage} />
    <Route path="/projects" id="05" title="SN_projects" component={ProjectsPage} />
    <Route path="/etc" id="06" title="SN_etcetera" component={EtceteraPage} />
    <Route path="/vr" id="XX" title="VR" component={VRpage} />
  </Route>
);
