import React from "react";
import setSearchTerm from "../features/redditPosts/redditPostsSlice";
import { useSelector, useDispatch } from "react-redux";


export const Header = () => {

  const searchTerm = useSelector((state) => state.redditPosts.searchTerm);
const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  }


  return (
    <header>
      <div className="header">
        <div className="logoContainer">
          <img src="robot-44.svg" alt="a logo of reddit reduced" />
          <h1>
            <span className="Reddit">Reddit</span> Reduced
          </h1>
        </div>

        <form className="search">
          {" "}
          <input value={searchTerm} onChange={handleChange} type="text" name="Search" id="Search" />
          <button type="submit">Search</button>
        </form>

      </div>
    </header>
  )
};
