import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubreddits } from "./subredditsSlice";

export const Subreddits = () => {

  const dispatch = useDispatch();

  const subreddits = useSelector((state) => state.subreddits.subreddits);

  const handleSubreddits = () => {
    dispatch(getSubreddits());
  };

  useEffect(() => {
    handleSubreddits();
  }, []);
  const selectedSubreddits = useSelector((state) => state.subreddits.selectedSubreddits);

  return (
    <div>
      <h1>Subreddits</h1>
      <ul>
        {subreddits.map((subreddit) => (
          <li key={subreddit.data.id}>{subreddit.data.display_name}</li>
        ))}
      </ul>
    </div>
  );
};
