import React, {useState} from "react";
import '../css/RegisterScreen.css'
import validator from 'validator'

const RegisterServiceProvider = () => {
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    const validateEmail = (e) => {
        let email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email!')
        }
        else {
            setEmailError('Enter valid Email!')
        }
    }

    const validatePhoneNumber = (e) => {
        const number = e.target.value;
        const isValidPhoneNumber = validator.isMobilePhone(number, 'en-IN')
        if(isValidPhoneNumber){
            setPhoneError('Valid Phone!')
        }
        else {
            setPhoneError("Invalid Phone Number")
        }
    }


    return(
        <div className="container" color= "cyan">
            <form >

                <h1>Sign Up for Service Provider Account</h1>
                <p>Please fill in this form to create an account.</p>


                <input type="text" placeholder="Enter full name" id="fname"  width = "100px" required/>
                <input type="text" placeholder="Enter Location" id="location" required/>
                <input type="text" placeholder="Enter the service offered" id="service" required/>
                <input type="text" id="email" placeholder="Enter Email"
                       onChange={(e) => validateEmail(e)}></input> <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{emailError}</span>
                <input type="text" id="phone" placeholder="Enter Phone"
                       onChange={(e) => validatePhoneNumber(e)}></input> <br />
                <span style={{
                    fontWeight: 'bold',
                    color: 'red',
                }}>{phoneError}</span>
                <input type="number" id="charges" placeholder="Enter the charges in wei. " required/>
                <button className="btn btn-primary mt-2 btn-sm w-100">Sign Up</button>
            </form>
        </div>
    )
}

export default RegisterServiceProvider