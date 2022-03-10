import HabitPresenter from "../habits_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, text: "하하하", count: 1 },
    { id: 2, text: "하하하2", count: 0 },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });
  it("초기화하기", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("count 증가하고 업데이트함수 호출하기", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it("count 감소하고 업데이트함수 호출하기", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("감소할때 count를 0 이하로 만들지 않는다", () => {
    presenter.decrement(habits[0], update);
    checkUpdateIsCalled();
    presenter.decrement(habits[0], update);

    //2번 호출해도 -1이 아닌 0이어야 한다.
    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it("삭제", () => {
    presenter.delete(1, update);
    expect(presenter.getHabits()).toEqual([
      { count: 0, id: 2, text: "하하하2" },
    ]);
  });

  it("추가", () => {
    presenter.add("히히히", update);
    expect(presenter.getHabits()[2].text).toBe("히히히");
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });
  it("최대갯수를 초과하면 에러 던진다", () => {
    presenter.add("히히히1", update);
    expect(() => {
      presenter.add("히히히2", update);
    }).toThrow(`습관의 개수는 3 이상이 될 수는 없습니다.`);
  });

  describe("리셋", () => {
    it("리셋은 모든 count를 0으로 만든다.", () => {
      presenter.reset(update);
      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      checkUpdateIsCalled();
    });

    it("이미 0 인 count는 0으로 만들지 않는다.", () => {
      const habits = presenter.getHabits();
      presenter.reset(update);
      const updatedHabits = presenter.getHabits();
      // 0번째는 1이고
      // 1번째는 0이라서 새로 값을 줄 필요가 없음

      expect(updatedHabits[1]).toBe(habits[1]);
    });
  });

  function checkUpdateIsCalled() {
    // 몇번 호출되었는지
    expect(update).toHaveBeenCalledTimes(1);
    // 정확한 배열을 전달했는지 확인하기 위함
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
