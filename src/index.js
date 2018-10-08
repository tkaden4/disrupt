import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import "./index.sass";

const elem_id = "react-app";

let elem = document.getElementById(elem_id);

if (elem === undefined) {
    throw new Error("unable to load element");
}

ReactDOM.render(<HashRouter>
    <Route path="/" exact component={HomePage} />
</HashRouter>, elem);