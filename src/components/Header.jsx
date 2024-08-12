import React from "react";


export const Header = () => {


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
          <input type="text" name="Search" id="Search" />
          <button type="submit">Search</button>
        </form>

      </div>
    </header>
  )
};
