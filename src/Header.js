import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }] = useStateValue(); // Removed dispatch

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar 
          alt={user?.display_name || "Guest"} 
          src={user?.images?.[0]?.url || "default-avatar.png"} 
        />
        <h4>{user?.display_name || "Guest"}</h4>
      </div>
    </div>
  );
}

export default Header;
