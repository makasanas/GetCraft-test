import React, { Component } from "react";
import  { DetailModel }  from '../Component'

export default class ItemCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMOdelOpen: false,
            userDetail :{}
        }
        this.modelOpen = this.modelOpen.bind(this);
    }

    modelOpen( data, index) {
        let isMOdelOpen = this.state.isMOdelOpen;
        this.setState({ isMOdelOpen: !isMOdelOpen,  userDetail : data})
    }

    render() {
        const { data } = this.props;
        // const { userDetail, isMOdelOpen} = this.state;


        return (
                 <div className="item-cart" >
                 {/* <div className="item-cart"  onClick={() => this.modelOpen( data)} > */}
                    <div className="profile-img">
                         <img src={data.picture.medium}/>
                    </div>
                    <div className="nat">NAT : <span>{data.nat}</span></div>
                    <div className="user-detail">
                        <div className="name">{data.name.title} {data.name.first} {data.name.last}</div>
                        <div className="contact-info">
                            <div className="email">{data.email}</div>
                            <div className="email">{data.phone}</div>
                        </div>
                    </div>
                    <div className="address-info">
                        <div className="address">{data.location.street}, {data.location.city}</div>
                    </div>
                    {/* {isMOdelOpen ? <div className="detailMOdel">
                    <DetailModel userDetail = {userDetail} />
                </div> :''
                } */}
                 </div>
        );
      }
}
