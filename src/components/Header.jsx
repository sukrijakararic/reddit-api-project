import React, {useState, useEffect} from "react";
import { setSearchTerm } from "../features/redditPosts/redditPostsSlice";
import { useSelector, useDispatch } from "react-redux";


export const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.redditPosts.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (event) => {
    setSearchTermLocal(event.target.value);
  }
  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };
  

  return (
    <header>
      <div className="header">
        <div className="logoContainer">
          <img src="robot-44.svg" alt="a logo of reddit reduced" />
          <h1>
            <span className="Reddit">Reddit</span> Reduced
          </h1>
        </div>

        <form className="search" onSubmit={onSearchTermSubmit}>
          {" "}
          <input value={searchTermLocal} onChange={onSearchTermChange}  type="text" name="Search" id="Search" />
          <button type="submit" onClick={onSearchTermSubmit}>Search</button>
        </form>

      </div>
    </header>
  )
};
