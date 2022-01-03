import React, { memo } from "react";
import { useState, useCallback } from "react";
import { Habit, NavBar } from ".";

export const Habits = memo(() => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [habits, setHabits] = useState([]);

  const handleIncrement = useCallback(
    (item) => {
      setHabits(
        habits.map((habit) =>
          item.id === habit.id ? { ...habit, count: habit.count + 1 } : habit
        )
      );
    },
    [habits]
  );

  const handleDecrement = useCallback(
    (item) => {
      if (item.count > 0) {
        setHabits(
          habits.map((habit) =>
            item.id === habit.id ? { ...habit, count: habit.count - 1 } : habit
          )
        );
      }
    },
    [habits]
  );

  const handleDelete = useCallback(
    (id) => {
      setHabits(habits.filter((habit) => habit.id !== id));
    },
    [habits]
  );

  const handleAdd = useCallback(() => {
    setHabits(habits.concat({ text, id, count: 0 }));
    setId((cur) => cur + 1);
    setText("");
  }, [text]);

  const handleReset = useCallback(() => {
    setHabits(
      habits.map((habit) =>
        habit.count !== 0 ? { ...habit, count: 0 } : habit
      )
    );
  }, [habits]);

  return (
    <div>
      <NavBar
        count={habits.reduce((acc, cur) => {
          return cur.count !== 0 ? acc + 1 : acc;
        }, 0)}
      />
      <div>
        <input
          className="add-input"
          placeholder="Habit"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          handleDelete={() => handleDelete(habit.id)}
          increase={() => handleIncrement(habit)}
          decrease={() => handleDecrement(habit)}
          habit={habit}
        />
      ))}
      <button onClick={handleReset} className="reset-button">
        Reset All
      </button>
    </div>
  );
});
