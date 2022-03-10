export default class HabitPresenter {
  constructor(habits, maxHabits) {
    this.habits = habits;
    this.maxHabits = maxHabits;
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
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  }

  delete(id, update) {
    this.habits = this.habits.filter((habit) => habit.id !== id);
    update(this.habits);
  }

  add(name, update) {
    if (this.habits.length === this.maxHabits) {
      throw new Error(
        `습관의 개수는 ${this.maxHabits} 이상이 될 수는 없습니다.`
      );
    }
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
