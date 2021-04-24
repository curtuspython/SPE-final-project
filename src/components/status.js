import {withRouter} from "react-router";
import React, {Component, useLayoutEffect, useState} from "react";

class status extends Component{

    constructor(props){
        super(props);
        this.state ={account:this.props.account, contract : this.props.contract, Stat:null}
        this.getStatus().then(r => {console.log("Completed")});
    }
    getStatus = async () =>{
        let x = await this.props.contract.methods.ServiceProviders(this.state.account).call();
        if(x.status === true)
            this.setState({Stat: "Online"});
        else
            this.setState({Stat: "Offline"})
        console.log(this.state.Stat);

    }
    shoot=async(e)=> {
        e.preventDefault();
        await this.props.contract.methods.service_off().send({from:this.state.account});
        window.location.reload(false);

    }
    render(){
        document.title = "Now " + this.state.Stat;
        return (
            <div>
                <br></br><br></br>
                <button onClick={this.shoot} style={{width:"100%",background: "yellow", borderRadius :"1px"}}> Current Status :{this.state.Stat} </button>
            </div>
        )}
}

export default withRouter(status);