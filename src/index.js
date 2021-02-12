console.log("Hello webpack!");

import React, { useState } from "react";
import { render } from "react-dom";
import App from './components/App';

render(<App />, document.getElementById("app"));