import React, { Component } from "react";

import "./FullPost.css";

const FullPost = props => {
  console.log(props);
  return (
    <div className="FullPost">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <div className="Edit">
        <button className="Delete">Delete</button>
      </div>
    </div>
  );
};

export default FullPost;
