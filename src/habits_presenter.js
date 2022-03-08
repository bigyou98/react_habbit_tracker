export default class HabitPresenter {
  constructor(habits) {
    this.habits = habits;
  }

  getHabits() {
    return this.habits;
  }

  increment(item, update) {
    this.habits = this.habits.map((habit) =>
      item.id === habit.id ? { ...habit, count: habit.count + 1 } : habit
    );
    update(this.habits);
  }

  decrement(habit, update) {
    const count = habit.count - 1;
    this.habits = this.habits.map((item) =>
      habit.id === item.id ? { ...habit, count: count < 0 ? 0 : count } : item
    );
    update(this.habits);
  }

  delete(id, update) {
    this.habits = this.habits.filter((habit) => habit.id !== id);
    update(this.habits);
  }

  add(name, update) {
    this.habits = [...this.habits, { id: Date.now(), text: name, count: 0 }];
    console.log(this.habits);
    update(this.habits);
  }

  reset(update) {
    this.habits = this.habits.map((habit) =>
      habit.count !== 0 ? { ...habit, count: 0 } : habit
    );
    update(this.habits);
  }
}
