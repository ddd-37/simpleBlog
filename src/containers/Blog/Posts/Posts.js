import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  // Let's go get our data
  componentDidMount() {
    // Axios uses promises, so we can chain our methods to the get request
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        // Normally you can send a url param to limit the amount of posts we get back from the server,
        // but here we'll just slice off a few posts so we don't get overrun with too many posts
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          // Because the posts we get from the server don't have an author, we can take each post, destructure each post,
          // and add a new key value with the author to each
          return { ...post, author: "Devon" };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  // Method that let's us update the UI to show the post the user clicks on
  handlePostClick = post => {
    this.setState({ selectedPost: post });
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>
        Uh oh, looks like something went wrong!
      </p>
    );

    let fullPost;

    // Get get our posts and return as Post components
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={() => this.handlePostClick(post)}
          />
        );
      });

      // If the user has not clicked on anything we should give them a little message letting them know what they should do
      if (this.state.posts.length != 0) {
        // Make sure there are posts before we ask the ask to select a post
        fullPost = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
      }

      // If the user clicks on a blog post, we show the full post in the box just above the form
      // If a post was selected we need to pass the data from the post, down to the fullpost
      if (this.state.selectedPost) {
        const { title, author, id, body } = { ...this.state.selectedPost };
        fullPost = (
          <FullPost
            title={title}
            author={author}
            body={body}
            key={id}
            id={id}
          />
        );
      }
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>{fullPost}</section>
      </div>
    );
  }
}

export default Posts;
