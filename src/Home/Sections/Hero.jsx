import React, { Component } from "react";


export default class Hero extends Component {
    render() {
        return (
                <div className="hero">
                    <div className="container">
                        <div className="hero-content">
                        <div className="hero-text">
                            <h1>The Ultimate Place to Discover</h1>
                            <p>Find out ontact’s addresses and personal information.</p>
                        </div> 
                        <div className="search-box">
                        <input minLength={3} debounceTimeout={500} type="text"/>
                        <div className="btn">Search</div>
                    </div>
                        </div>
                   </div>
                 </div>
        );
      }
}
