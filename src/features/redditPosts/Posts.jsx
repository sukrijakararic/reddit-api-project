import { React, useEffect } from "react";
import { getRedditPosts } from "./redditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Posts.module.css";


export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.redditPosts.posts);
  const handleFetchPosts = () => {
    dispatch(getRedditPosts());
  };


  const timeAgo = Date.now() - posts[0].data.created_utc * 1000;

const convertMillistoHours = (time) => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  return hours;
};

const convertedTime = convertMillistoHours(timeAgo);

 

  // if (!posts) return <h1>Loading...</h1>; going to expand on this to have a loading feature

  return (
    <main>
      <button onClick={handleFetchPosts}>Get Posts</button>
      {posts.map((post) => (
        <article key={post.data.id} className={styles["post-container"]}>
          <h3>{post.data.title}</h3>
          <img src={post.data.url} />
          <div className="extra-info">{convertedTime} hours ago</div>
        </article>
      ))}
    </main>
  );
};
