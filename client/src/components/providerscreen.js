
import React from "react";
import '../css/RegisterScreen.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import status from "./status";
import Provider from "./Providerchoices";
import * as PropTypes from "prop-types";

class Status extends React.Component {
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

Status.propTypes = {};
const providerscreen = ({Account, Contract}) => {

    return(
        <Router>
            <div class={"hero"}>
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