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
import panda from "./images/panda.png"
import RegisterServiceProvider from "./RegisterServiceProvider";
import {withRouter} from "react-router";

const RegisterScreen = ({Account, Contract}) => {


    return(
        <div class = "hero">
            <nav className="navbar navbar-light bg-light" style={{background: "orange", height : "30px", fontSize : "20px"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" >Home</a>
                </div>
            </nav>
            <Router>

                <div class = "hero">
                    <h2>
                    <div class = "panda">Welcome to<br></br><img src={panda}></img><br></br> Your Helper</div>
                    <br></br>
                    </h2>
                    <ul>
                        <div style={{background: "red", padding: "10px"}}>
                            <li>
                                Please click below to choose your category:<br></br><br></br>
                            </li>
                        </div>
                        <br></br>
                        <li ><Link to="/registeruser" activeStyle = {{color : "red"}}><button class ="button" >User</button></Link>
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

export default withRouter(RegisterScreen);