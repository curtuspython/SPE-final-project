import React from "react";
import 'react-bootstrap';
import {useState} from 'react';
import validator from "validator";


const RegisterServiceProvider = ({Account, contract}) =>{
    let [typeservice,setType] = useState(0x0);
    let [emailError,setEmailError] = useState('');
    let [phoneError,setPhoneError] = useState('');

    const onChange = (e) => {
        if(e.target.value == "default"){
            setType(Number(0));}
        else
            console.log(typeservice);
        setType(e.target.value);
    }
    const validateEmail= (e)=>{
        let email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError("Valid Email!");
        }
        else {
            setEmailError( "Enter valid Email!");
        }
    }

    const validatePhoneNumber = (e)=>{
        const number = e.target.value;
        const isValidPhoneNumber = validator.isMobilePhone(number, 'en-IN')
        if(isValidPhoneNumber){
            setPhoneError("Valid Phone!");
        }
        else {
            setPhoneError("Invalid Phone!");
        }
    }

    const onsubmit = async(e)=>{
        e.preventDefault();
        const name = e.target.elements.full_name.value;
        const location = e.target.elements.location.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        const address= e.target.elements.spAddress.value;
        const sp_type = typeservice;
        const charges=e.target.elements.charges.value * Math.pow(10,18);
        await contract.methods.addServiceProvider(name,location, email,phone, charges, sp_type).send({from : address}).then(function(result){
            console.log("The funciton was succesfully terminated");
        });
        //console.log(name+ location+ email+ phone+ address+ sp_type+ charges);

    }

    return(
        <div className="container" color= "lightblue">
            <form onSubmit={onsubmit}>
                <h1>Sign Up for Service Provider</h1><br></br><br></br>
                <input type ="text"  name = "spAddress" readOnly={true}  disabled={true} value={Account}/><br></br><br></br>
                <input type="text" placeholder="Enter full name" name="full_name"   required/><br></br><br></br>
                <input type="text" placeholder="Enter Home adddress" name="home"   required/><br></br><br></br>
                <input type="text" placeholder="Enter City" name="location" required/><br></br><br></br>
                <input type="text" name="email" placeholder="Enter Email"
                       onChange={(e) => validateEmail(e)}/> <br/><br></br><br></br>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{emailError}</span>
                <input type="text" name="phone" placeholder="Enter Phone"
                       onChange={(e) => validatePhoneNumber(e)}/> <br/><br></br><br></br>
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{phoneError}</span>
                <label id ="service_type" >Choose Service Type:</label>
                <select id="service_type" className="form-control"  onChange={onChange} required>
                    <option value = {0}>Select</option>
                    <option value = {1}>Carpentry</option>
                    <option value = {2}>Plumbing</option>
                    <option value={3}>Painting</option>
                    <option value ={4}>Electrical</option>
                </select>
               <br></br><br></br>
                <label id ="wei" >Enter Charges(in ETH):</label>
                <input type="number" id ="wei" step="any" placeholder={"Enter the charges in ETH."} name="charges" /><br></br><br></br>
                <button className="btn btn-primary mt-2 btn-sm w-50">Sign Up</button>
            </form>
        </div>
    )
}

export default RegisterServiceProvider;