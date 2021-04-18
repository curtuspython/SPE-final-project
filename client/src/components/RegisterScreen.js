import React from "react";
import '../css/RegisterScreen.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegisterUser from "./RegisterUser";
import bubbles from "./images/bubble.png"
import RegisterServiceProvider from "./RegisterServiceProvider";

const RegisterScreen = ({Account, Contract}) => {


        return(
            <div class = "hero">
                <nav className="navbar navbar-light bg-light" style={{background: "yellow"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Home</a>
                    </div>
                </nav>
            <Router>

                <div class = "hero">
                    <br></br><br></br><br></br><br></br><br></br>

                        <ul>
                            <div>
                            <li>
                                Please click on the links below to choose your category:<br></br><br></br>
                            </li>
                            </div>

                            <li ><Link to="/registeruser"><button class ="button" >User</button></Link>
                                <br></br>
                                <br></br>
                            </li>


                            <li class = "button"><Link to = "/registersp">
                                <button className="button">Service Provider</button></Link>

                            </li>

                        </ul>
                    <div className="bubbles">
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                        <img src={bubbles}/>
                    </div>

                    <Switch>
                        <Route path="/registeruser">
                            <RegisterUser Account={Account} contract ={Contract}/>
                        </Route>
                        <Route path = "/registersp">
                            <RegisterServiceProvider Account={Account} contract ={Contract}/>
                        </Route>
                    </Switch>
                </div>
            </Router>


            </div>
  )
}

export default RegisterScreen;