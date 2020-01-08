import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

// Handle errors globally for all requests (only sending, eg. if there's no internet connection)
axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log("errpr", error);
    return Promise.reject(error);
  }
);

// Handle errors for what we get back from the serrver (eg. bad urls)
axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
