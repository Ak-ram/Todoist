import {
  Component,
  FriendsIcon,
  SortIcon,
  FutureTasks,
  TaskList,
} from "../../../utils/modules";
import { ContextMenu } from "../../../utils/functions.js";
class MainTodayState extends Component {
  state = {
    daysInMonth: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate(),
    thisYear: new Date().getFullYear(),
    thisMonth: new Date().getMonth(),
    thisDay: new Date().getDate(),
    verticalOffset: 0,
  };
  componentDidMount() {
    let futureTaskScreen = document.querySelector(".future-task-screen"),
      clearDay = document.querySelector(".clear-day");
    futureTaskScreen.childElementCount !== 0
      ? clearDay.classList.add("d-none")
      : clearDay.classList.remove("d-none");
  }
  render() {
    return (
      <>
        <header className="main-today-state status-header d-flex align-items-center justify-content-between pt-4 bg-darkApp-body top-0 z-33 position-sticky">
          <div className="d-flex align-items-center gap-2">
            <h4 className="state text-capitalize">today</h4>
            <sub className="text-semiRed">
              {new Date().toString().slice(0, 11)}
            </sub>
          </div>
          <div className="state-options fs-sm d-flex align-items-center gap-3 text-white-50">
            <span
              className="hover-gray smooth-fast px-2 py-1 rounded cursor-pointer"
              style={{ lineHeight: "22px" }}
              id="contextMenuForSorting"
              onClick={ContextMenu}
            >
              <SortIcon /> Sort
            </span>
          </div>
        </header>

        {/* <AddTaskButton /> */}
        <section className="today-tasks">
          <FutureTasks key={`${Math.random() * 332}`} taskLength="">
            <TaskList
              storageKey={new Date(
                this.state.thisYear,
                this.state.thisMonth,
                this.state.thisDay
              ).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            />
          </FutureTasks>
        </section>
        <section className="w-50 m-auto clear-day">
          <div className="m-auto shake-y" style={{ width: "220px" }}>
            <FriendsIcon />
          </div>
          <div className="text-center">
            <p className="h5 fw-normal">Enjoy your day off</p>
          </div>
        </section>
      </>
    );
  }
}

export default MainTodayState;
