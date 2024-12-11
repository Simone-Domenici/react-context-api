import React, { useContext } from "react";
import PostsList from "./PostList";
import PostsContext from "../../contexts/PostsContext";

export default function PostsPage() {
  const { categories } = useContext(PostsContext)

  return (
    <div>
      <h1>All Posts</h1>
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
