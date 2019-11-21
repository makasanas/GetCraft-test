import React, { Component } from "react";


export default class DetailModel extends Component {
    constructor(props) {
        super(props)
    
    }

   

    render() {
        const { userDetail} = this.props

        return (
            <div className="detail-popup">
                <h1>detail</h1>
            </div>
        );
      }
}
