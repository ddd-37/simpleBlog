import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="is-active" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/new-post"
                  activeClassName="is-active"
                  exact={true}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact={true} component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:postId" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
