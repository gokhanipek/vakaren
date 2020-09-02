import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { unregister } from './serviceWorker';

import './index.scss';

ReactDOM.render( <App /> , document.getElementById("root"));

unregister();


