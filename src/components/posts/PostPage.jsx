import React, { useContext } from "react";
import PostsList from "./PostList";
import PostsContext from "../../contexts/PostsContext";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const { categories } = useContext(PostsContext)

  return (
    <div className="all-posts">
      <div className="wrapper">
        <h1 className="title">All Posts List</h1>
        <Link className="link" to="/posts/create">
          Nuovo post
        </Link>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <PostsList />
    </div>
  );
}
