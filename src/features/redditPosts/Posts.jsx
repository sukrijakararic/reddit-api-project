import { React, useEffect, useState } from "react";
import { getRedditPosts, getComments } from "./redditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Posts.module.css";
import ms from "ms";
import { ArrowUp } from "../../components/svg-arrows/ArrowUp";
import { ArrowDown } from "../../components/svg-arrows/ArrowDown";
import { CommentsDisplay } from "../comments/CommentsDisplay";
import { setComments } from "./redditPostsSlice";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.redditPosts.posts);
  const subreddit = useSelector(
    (state) => state.redditPosts.selectedSubreddits
  );
  const searchTerm = useSelector((state) => state.redditPosts.searchTerm);

  const handleFetchPosts = () => {
    dispatch(getRedditPosts(subreddit));
  };

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const [green, setGreen] = useState(false);
  const [red, setRed] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleGreen = (id) => {
    setGreen(id);
    setRed(false);
  };

  const handleRed = (id) => {
    setRed(id);
    setGreen(false);
  };

  const handleShowComments = (post) => {
    dispatch(setComments([]));
    setSelectedPostId(post.data.id);
    dispatch(getComments(post.data.permalink));
  };

  return (
    <main>
      {searchTerm
        ? posts
            .filter((post) =>
              post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((post) => (
              <article key={post.data.id} className={styles.postContainer}>
                <div className={styles.topCard}>
                  <div className={styles.upVotes}>
                    <ArrowUp
                      fill={green === post.data.id ? "green" : "white"}
                      onClick={() => handleGreen(post.data.id)}
                    />
                    <p className={styles.ups}>
                      {post.data.ups >= 1000
                        ? `${(post.data.ups / 1000).toFixed(1)}k`
                        : post.data.ups}
                    </p>
                    <ArrowDown
                      fill={red === post.data.id ? "red" : "white"}
                      onClick={() => handleRed(post.data.id)}
                    />
                  </div>
                  <h3>{post.data.title}</h3>
                </div>
                <img
                  className={styles.postImage}
                  src={post.data.url || post.data.thumbnail}
                />
                <p className={styles.postText}>{post.data.selftext}</p>
                <div className={styles.bottomCard}>
                  <span>
                    u/{post.data.author} --{" "}
                    {ms(Date.now() - post.data.created_utc * 1000)} ago
                  </span>
                  <div>
                    <p
                      className={styles.comments}
                      onClick={() => handleShowComments(post)}
                    >
                      <span>{post.data.num_comments} comments</span>
                    </p>
                    {selectedPostId === post.data.id && (
                      <CommentsDisplay  />
                    )}
                  </div>
                </div>
              </article>
            ))
        : posts.map((post) => (
            <article key={post.data.id} className={styles.postContainer}>
              <div className={styles.topCard}>
                <div className={styles.upVotes}>
                  <ArrowUp
                    fill={green === post.data.id ? "green" : "white"}
                    onClick={() => handleGreen(post.data.id)}
                  />
                  <p className={styles.ups}>
                    {post.data.ups >= 1000
                      ? `${(post.data.ups / 1000).toFixed(1)}k`
                      : post.data.ups}
                  </p>
                  <ArrowDown
                    fill={red === post.data.id ? "red" : "white"}
                    onClick={() => handleRed(post.data.id)}
                  />
                </div>
                <h3>{post.data.title}</h3>
              </div>
              <img
                className={styles.postImage}
                src={post.data.url || post.data.thumbnail}
              />
              <p className={styles.postText}>{post.data.selftext}</p>
              <div className={styles.bottomCard}>
                <span>
                  u/{post.data.author} --{" "}
                  {ms(Date.now() - post.data.created_utc * 1000)} ago
                </span>
                <div>
                  <p
                    className={styles.comments}
                    onClick={() => handleShowComments(post)}
                  >
                    <span>{post.data.num_comments} comments</span>
                  </p>
                  {selectedPostId === post.data.id && (
                    <CommentsDisplay  />
                  )}
                </div>
              </div>
            </article>
          ))}
    </main>
  );
};


