import React from 'react';
import { Route, Switch } from 'react-router';

// Import all components

import App from "./App"
import RegisterUser from "./components/RegisterUser";
import RegisterServiceProvider from "./components/RegisterServiceProvider";
import RegisterScreen from "./componentscd /RegisterScreen";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/user_register' component={RegisterUser}></Route>
            <Route exact path='/sp_register' component={RegisterServiceProvider}/>
        </Switch>
    );
}
export default Main;
