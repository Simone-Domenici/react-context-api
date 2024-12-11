import React, { useContext } from "react";
import PostsList from "./PostList";
import PostsContext from "../../contexts/PostsContext";

export default function PostsPage() {
  const { categories } = useContext(PostsContext)

  return (
    <div className="all-posts">
      <h1 className="title">All Posts List</h1>
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
