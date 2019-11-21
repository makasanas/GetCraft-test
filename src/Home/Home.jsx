import React, { Component } from "react";
import { Hero } from './Sections';
import { ContactList } from './Sections'
import './Home.scss';

export default class home extends Component {
  render() {
    return (
      <div>
       <Hero/>
       <ContactList/>
      </div>
    )
  }
}
