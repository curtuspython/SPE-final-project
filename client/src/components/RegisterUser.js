import React, {Component, useState} from "react";
import '../css/RegisterScreen.css'
import validator from 'validator'
import {withRouter} from "react-router";
import bubbles from "./images/bubble.png";

class RegisterUser extends Component{


    constructor(props) {
        super(props);
        this.state={emailError: '', phoneError :'', userAccount :this.props.Account, contract:this.props.contract};

    }

    validateEmail(e){
        let email = e.target.value;

        if (validator.isEmail(email)) {
            this.setState({emailError : 'Valid Email!'});
        }
        else {
            this.setState({emailError : 'Enter valid Email!'});
        }
    }

    validatePhoneNumber(e){
        const number = e.target.value;
        const isValidPhoneNumber = validator.isMobilePhone(number, 'en-IN')
        if(isValidPhoneNumber){
            this.setState({phoneError :'Valid Phone!'});
        }
        else {
            this.setState({phoneError : "Invalid Phone Number"});
        }
    }

    onsubmit = async(e)=>{

        e.preventDefault();
        const name = e.target.elements.full_name.value;
        const home = e.target.elements.home.value;
        const location = e.target.elements.location.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        const address= e.target.elements.userAddress.value;
        await this.props.contract.methods.addUser(name,home,location, email,phone).send({from : address}).then(function(result){
            console.log("The funciton was succesfully terminated");
        });

    }
    render(){
    return(
        <div color= "lightblue">
            <form onSubmit={this.onsubmit}><br></br>
                <h1>Sign Up for User</h1><br></br>
                <input type ="text"  name = "userAddress" readOnly={true} value={this.state.userAccount = this.props.Account} disabled={true}/><br></br><br></br>
                <input type="text" placeholder="Enter full name" name="full_name"   required/><br></br><br></br>
                <input type="text" placeholder="Enter Home adddress" name="home"   required/><br></br><br></br>
                <input type="text" placeholder="Enter City" name="location" required/><br></br><br></br>
                <input type="text" name="email" placeholder="Enter Email"
    onChange={(e) => this.validateEmail(e)}/> <br/>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{this.state.emailError}</span><br></br>
                <input type="text" name="phone" placeholder="Enter Phone"
    onChange={(e) => this.validatePhoneNumber(e)}/> <br/>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{this.state.phoneError}</span><br></br>
                <button className="btn btn-primary mt-2 btn-sm w-50">Sign Up</button>
            </form>
            <div className="bubbles">
                <img src={bubbles}/>
                <img src={bubbles}/>
                <img src={bubbles}/><img src={bubbles}/>
                <img src={bubbles}/>
                <img src={bubbles}/>
                <img src={bubbles}/>
                <img src={bubbles}/>


            </div>
        </div>
    )}
}

export default withRouter(RegisterUser);