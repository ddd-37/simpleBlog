import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null
  };

  // Let's go get our data
  componentDidMount() {
    // Axios uses promises, so we can chain our methods to the get request
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      // Normally you can send a url param to limit the amount of posts we get back from teh server,
      // but here we'll just slice off a few posts so we don't get overrun with too many posts
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        // Becuase the posts we get from the server don't have an author, we can take each post, destructure each post,
        // and add a new key value with the author to each
        return { ...post, author: "Devon" };
      });
      console.log(updatedPosts);
      this.setState({ posts: updatedPosts });
    });
  }

  // Method that let's us update the UI to show the post the user clicks on
  handlePostClick = post => {
    this.setState({ selectedPost: post });
  };

  render() {
    // Get get our posts and return as Post components
    const posts = this.state.posts.map(post => {
      return (
        <Post
          title={post.title}
          author={post.author}
          key={post.id}
          clicked={() => this.handlePostClick(post)}
        />
      );
    });

    let fullPost = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    // If a post was selected we need to pass the data from the post, down to the fullpost
    if (this.state.selectedPost) {
      console.log(
        "TCL: Blog -> render -> this.state.selectedPost",
        this.state.selectedPost
      );
      const { title, author, id, body } = { ...this.state.selectedPost };
      fullPost = <FullPost title={title} author={author} body={body} />;
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>{fullPost}</section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
