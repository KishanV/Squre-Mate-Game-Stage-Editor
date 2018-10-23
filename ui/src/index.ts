import {Dashboard} from "./Dashboard/dashboard";
import ReactDOM = require("react-dom");
import React = require("react");

ReactDOM.render(
    React.createElement(Dashboard),
    document.body.getElementsByClassName('App')[0]
);