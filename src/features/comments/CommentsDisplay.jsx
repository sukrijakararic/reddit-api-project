import React from "react";
import { useSelector } from "react-redux";
import styles from "./CommentsDisplay.module.css";


export const CommentsDisplay = () => {
  const comments = useSelector((state) => state.redditPosts.comments);

  return (
    <div>
      {comments.map((comment) => (
        <div className={styles.commentContainer} key={comment.data.id}>
          <img src={comment.data.author} alt="" />
          <p className={styles.commentAuthor}>{comment.data.author}</p>     
          <p key={comment.data.id}>- {comment.data.body}</p>
          <p className={styles.commentLikes}>{comment.data.ups} likes</p>
        </div>
      ))}
    </div>
  );
};
