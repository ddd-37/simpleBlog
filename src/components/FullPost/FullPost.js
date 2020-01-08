import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

const deletepostHandler = id => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + id)
    .then(response => {
      console.log(response);
    });
};

const FullPost = props => {
  console.log(props);
  return (
    <div className="FullPost">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <div className="Edit">
        <button className="Delete" onClick={() => deletepostHandler(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FullPost;
