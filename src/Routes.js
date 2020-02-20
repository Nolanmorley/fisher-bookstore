import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Books from "./Books/Book";
import Authors from "./Authors/Author";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
            <Route path="/authors" component={Authors} />
        </Switch>
    );
}