import {withRouter} from "react-router";
import React, {Component, useState} from "react";

class status extends Component{
    constructor(props){
        super(props);
        this.state ={account:this.props.account, contract : this.props.contract};
        console.log("hey i am called")
    }
    shoot=async(e)=> {
        e.preventDefault();
        await this.state.contract.methods.service_off().send({from:this.state.account});
        alert('submitted');


    }
    render(){
        return (
            <div>
                <button onClick={this.shoot} height= "100%"> click on this to change the status </button>
            </div>
        )}
}

export default withRouter(status);