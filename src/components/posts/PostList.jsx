import React, { useContext } from "react";
import PostsContext from "../../contexts/PostsContext";
import PostCard from "../PostCard";

export default function PostsList() {
  const { posts } = useContext(PostsContext);

  if (posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="post-grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
