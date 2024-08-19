import React from "react";
import { useSelector } from "react-redux";
import styles from "./CommentsDisplay.module.css";

export const CommentsDisplay = () => {
  const comments = useSelector((state) => state.redditPosts.comments);

  return (
    <div>
      {comments.map((comment) => (
        <ul>
          <li key={comment.data.id}>{comment.data.body}</li>
        </ul>
      ))}
    </div>
  );
};
