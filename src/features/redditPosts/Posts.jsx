import { React, useEffect} from "react";
import { getRedditPosts } from "./redditPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Posts.module.css";
import ms from "ms";

export const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.redditPosts.posts);
  const handleFetchPosts = () => {
    dispatch(getRedditPosts());
  };

  useEffect(() => {
    handleFetchPosts();
  }, []);

  // if (!posts) return <h1>Loading...</h1>; going to expand on this to have a loading feature
  return (
    <main>
      {posts.map((post) => (
        <article key={post.data.id} className={styles.postContainer}>
          <div className={styles.topCard}>
          <div className={styles.upVotes}>
          <img className={styles.arrow} src="/arrow-up.svg" alt="up-arrow" />
          <p className={styles.ups}>{post.data.ups >= 1000 ? `${(post.data.ups / 1000).toFixed(1)}k` : post.data.ups}</p>
          <img className={styles.arrow} src="/arrow-down.svg" alt="down-arrow" />
          </div>
          <h3>{post.data.title}</h3>
          </div>
          <img src={post.data.url} />
          <div className="extra-info">
            <span className={styles.time}>{ms(Date.now() - post.data.created_utc * 1000)} ago </span>
          </div>
        </article>
      ))}
    </main>
  );
};
