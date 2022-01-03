import React, { memo } from "react";

export const NavBar = memo(({ count }) => {
  return (
    <div className="navbar">
      <i className="navbar-logo fas fa-leaf" />
      <span>Habit Tracker </span>
      <span className="navbar-count">{count}</span>
    </div>
  );
});
