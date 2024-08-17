import { React, useEffect, useState } from "react";
import { getRedditPosts, getComments } from "./redditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Posts.module.css";
import ms from "ms";
import { ArrowUp } from "../../components/svg-arrows/ArrowUp";
import { ArrowDown } from "../../components/svg-arrows/ArrowDown";
import { CommentsDisplay } from "../comments/CommentsDisplay";


export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.redditPosts.posts);
  const subreddit = useSelector((state) => state.redditPosts.selectedSubreddits);
  
  const handleFetchPosts = () => {
    dispatch(getRedditPosts(subreddit));
  };

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const [green, setGreen] = useState("white");
  const [red, setRed] = useState("white");

  const handleGreen = () => {
    setGreen(green === "green" ? "white" : "green");
  };

  const handleRed = () => {
    setRed(red === "red" ? "white" : "red");
  };
  // if (!posts) return <h1>Loading...</h1>; going to expand on this to have a loading feature
  return (
    <main>
      {posts.map((post) => (
        <article key={post.data.id} className={styles.postContainer}>
          
          <div className={styles.topCard}>
            <div className={styles.upVotes}>
              {/*<img className={styles.arrow} src="/arrow-up.svg" alt="up-arrow" />*/}
              <ArrowUp fill={green} onClick={handleGreen} />
              <p className={styles.ups}>
                {post.data.ups >= 1000
                  ? `${(post.data.ups / 1000).toFixed(1)}k`
                  : post.data.ups}
              </p>
              <ArrowDown fill={red} onClick={handleRed} />
              {/*<img className={styles.arrow} src="/arrow-down.svg" alt="down-arrow" />*/}
            </div>
            <h3>{post.data.title}</h3>
          </div>
          <img src={post.data.url} />
          <div className={styles.bottomCard}>
            <span>
              u/{post.data.author} --{" "}
              {ms(Date.now() - post.data.created_utc * 1000)} ago
            </span>
            <div>
              <p className={styles.comments} onClick={() => dispatch(getComments(post.data.permalink))}><span>{post.data.num_comments} comments</span></p>
          <CommentsDisplay />
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};
