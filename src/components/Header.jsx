import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logoContainer">
        <img src="robot-44.svg" alt="a logo of reddit reduced" />
        <h1><span>Reddit</span> Reduced</h1>
        </div>


        <form action="">
          {" "}
          <input type="text" name="searchReddit" id="searchReddit" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};
