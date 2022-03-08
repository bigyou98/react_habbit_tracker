import React, { memo } from "react";
import { useState, useCallback } from "react";
import { Habit, NavBar } from ".";

export const Habits = memo(({ presenter }) => {
  console.log(presenter.getHabits());
  const [text, setText] = useState("");
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = useCallback(
    (habit) => {
      presenter.increment(habit, setHabits);
    },
    [presenter]
  );

  const handleDecrement = useCallback(
    (habit) => presenter.decrement(habit, setHabits),
    [presenter]
  );

  const handleDelete = useCallback(
    (id) => {
      presenter.delete(id, setHabits);
    },
    [presenter]
  );

  const handleAdd = useCallback(() => {
    presenter.add(text, setHabits);
  }, [text, presenter]);

  const handleReset = useCallback(() => {
    presenter.reset(setHabits);
  }, [presenter]);

  return (
    <div>
      <NavBar
        // count={habits.reduce((acc, cur) => {
        //   return cur.count !== 0 ? acc + 1 : acc;
        // }, 0)}
        count={0}
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
