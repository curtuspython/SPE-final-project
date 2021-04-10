import React, {Component, useState} from "react";
import '../css/RegisterScreen.css'
import validator from 'validator'
import {withRouter} from "react-router";
import {Link, useHistory} from 'react-router-dom';
import Main from '../Main';

class RegisterUser extends Component{


    constructor(props) {
        super(props);
        this.state={emailError: '', phoneError :''};
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

    async onsubmit(e){

        e.preventDefault();
        const name = e.target.elements.fname.value;
        const location = e.target.elements.location.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        console.log(name + location +email+phone);
        //await contract.methods.addUser(name, location, email,phone).send({from : address}).then(function(result){
        //    console.log("The funciton was succesfully terminated");
        //});

    }
    render(){
    return(
        <div className="container" color= "lightblue">
            <form onSubmit={onsubmit} >

                <h1>Sign Up for User Account{this.props.address}</h1>
                    <p>Please fill in this form to create an account.</p>
                <input type="text" placeholder="Enter full name" name="fname"   required/>
                <input type="text" placeholder="Enter Location" name="location" required/>
                <input type="text" name="email" placeholder="Enter Email"
    onChange={(e) => this.validateEmail(e)}/> <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{this.state.emailError}</span>
                <input type="text" name="phone" placeholder="Enter Phone"
    onChange={(e) => this.validatePhoneNumber(e)}/> <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{this.state.phoneError}</span>
                <button className="btn btn-primary mt-2 btn-sm w-50">Sign Up</button>
            </form>
        </div>
    )}
}

export default withRouter(RegisterUser);