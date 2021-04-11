import React from "react";
import '../css/RegisterScreen.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RegisterUser from "./RegisterUser";
import RegisterServiceProvider from "./RegisterServiceProvider";

const RegisterScreen = ({Account, Contract}) => {

        return(
            <Router>
                <div>
                        <ul>
                            <li>
                                Please click on the links below to choose your category:
                            </li>
                            <li>
                                <Link to="/registeruser">User</Link>
                            </li>
                            <li>
                                <Link to = "/registersp">Service Provider</Link>
                            </li>

                        </ul>


                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
  )
}

export default RegisterScreen;