import React from "react";

export const Habit = ({ habit, handleDelete, increase, decrease }) => {
  const { text, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{text}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={increase}>
        <i className="fas fa-plus-square" />
      </button>
      <button className="habit-button habit-decrease" onClick={decrease}>
        <i className="fas fa-minus-square" />
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash" />
      </button>
    </li>
  );
};
