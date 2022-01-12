import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NavBar from "./NavBar"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messages from "./Messages";

function App() {
    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/signup">
                    <Signup />
                </Route>

                <Route path="/messages">
                    <Messages />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;