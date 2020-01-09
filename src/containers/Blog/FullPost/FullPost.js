import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  // Let's go get our data
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`
      )
      .then(response => {
        this.setState({
          loadedPost: response.data
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  deletepostHandler = id => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    let loadedPost;
    if (this.state.loadedPost) {
      loadedPost = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deletepostHandler("ID")}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return <div>{loadedPost}</div>;
  }
}

export default FullPost;
