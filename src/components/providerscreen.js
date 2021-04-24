import React from "react";
import '../css/RegisterScreen.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Status from "./status";
import Provider from "./Providerchoices";
import * as PropTypes from "prop-types";
import panda from "./images/panda.png";


Status.propTypes = {};
const providerscreen = ({Account, Contract}) => {
    document.title = "Service Provider Screen";
    return(

        <Router>
            <div class={"hero"}>
                <h2>
                    <div className="panda">Welcome to<br></br><img src={panda}></img><br></br> Your Helper</div>
                    <br></br>
                </h2>
                <ul><br></br>
                    <li>
                        <br></br><br></br>
                        <h2>What you want to do:</h2><br></br>
                    </li>
                    <li>
                        <Link to="/status"><button class ="button">Change the Status</button></Link>
                    </li>
                    <li>
                        <Link to = "/user"><br></br><br></br>
                            <button class="button">Select the User</button></Link>
                    </li>

                </ul>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/status">
                        <Status contract ={Contract} account={Account}/>
                    </Route>
                    <Route path = "/user">
                        <Provider contract ={Contract} account={Account} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default providerscreen;