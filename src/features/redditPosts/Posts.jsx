import React from "react";
import { getRedditPosts } from "./redditPostsSlice";
import { useDispatch, useSelector } from "react-redux";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.redditPosts.posts);
  const handleFetchPosts = () => {
    dispatch(getRedditPosts());
  };

  return (
    <div>
      <button onClick={handleFetchPosts}>Fetch Posts</button>
      {posts.map((post) => (
        <div key={post.data.id}>
          <h3>{post.data.title}</h3>
          <img src={post.data.thumbnail}/>
        </div>
      ))}
    </div>
  );
};
