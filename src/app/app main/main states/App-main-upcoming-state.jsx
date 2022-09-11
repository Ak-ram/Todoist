import { lazy, Suspense } from "react"; // react lazy
// import { FixedSizeList as List, areEqual } from 'react-window'
import {
  Component,
  VscChevronDown,
  VscChevronUp,
  FlatCalender,
  TaskList,
} from "../../../utils/modules";
import { dayFocus, flatCalender } from "../../../utils/functions";
const FutureTasks = lazy(() =>
  import("../../../components/Future tasks/C-future-tasks")
);
// const Row = ({ index, style }) => {
//   <div style={style}>Row {index}</div>
// }
class MainUpcomingState extends Component {
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

  componentDidUpdate() {
    let days = document.querySelectorAll(".day");
    days.forEach((day) => {
      let dayDate = +day.lastChild.textContent; // convert number inside each day from 'string' to 'number'
      if (
        dayDate === new Date().getDate() &&
        this.state.thisMonth === new Date().getMonth() &&
        this.state.thisYear === new Date().getFullYear()
      ) {
        day.firstChild.classList.remove("text-light");
        day.classList.add(
          "border-semiRed",
          "text-semiRed",
          "fw-bold",
          "shadow"
        );
        //  setTimeout(() => {
        // day.scrollIntoView({ block: 'start',  behavior: 'smooth' });
        //  }, 0);
      } else {
        day.firstChild.classList.add("text-light");
        day.classList.remove(
          "border-semiRed",
          "text-semiRed",
          "fw-bold",
          "shadow"
        );
      }
    });
  }
  nextWeek = () => {
    if (this.state.verticalOffset > -400) {
      this.setState({
        verticalOffset: this.state.verticalOffset - 100,
      });
    } else {
      if (this.state.thisMonth < 12) {
        this.setState({
          verticalOffset: 0,
          thisMonth: this.state.thisMonth + 1,
        });
      } else {
        this.setState({
          verticalOffset: 0,
          thisMonth: 1,

          thisYear: this.state.thisYear + 1,
        });
      }
    }
    // days.style.transform = `translateY(${this.state.verticalOffset}px)`;
  };
  prevWeek = (e) => {
    if (this.state.verticalOffset <= -100) {
      this.setState({
        verticalOffset: this.state.verticalOffset + 100,
      });
    } else {
      this.setState({
        verticalOffset: 0,
      });
    }
  };
  switchToCurrentDay = (e) => {
    let days = document.querySelectorAll(".day");
    this.setState({
      verticalOffset: this.state.verticalOffset,
      thisMonth: new Date().getMonth(),
      thisYear: new Date().getFullYear(),
    });
    days.forEach((day) => {
      if (+day.lastChild.textContent === new Date().getDate()) {
        day.scrollIntoView();
      }
    });
  };
  render() {
    return (
      <>
        <header className="status-header d-flex align-items-center justify-content-between pt-4 bg-darkApp-body top-0 z-33 position-sticky">
          <div className="position-relative state d-flex ">
            <h4
              className="month-year-pairs cursor-pointer"
              onClick={flatCalender}
            >
              {new Date(
                this.state.thisYear,
                this.state.thisMonth,
                1
              ).toLocaleString("en-US", { month: "long" })}{" "}
              {this.state.thisYear}
              <VscChevronDown size="18" className="ms-2" />
            </h4>
            <FlatCalender />
          </div>
          <div className="state-options fs-sm d-flex align-items-center text-white-50">
            <button
              className="btn text-secondary border border-end-0 border-secondary-200 "
              style={{
                borderRadius: "5px 0px 0 5px",
                padding: "0px 5px 1px",
              }}
              onClick={this.prevWeek}
            // disabled
            >
              <VscChevronDown size="15" className="cursor-pointer" />
            </button>
            <button
              id="next-week"
              className="btn text-secondary border border-secondary-200"
              style={{
                borderRadius: "0px 5px 5px 0px",
                padding: "0px 5px 1px",
              }}
              onClick={this.nextWeek}
            >
              <VscChevronUp size="15" className="cursor-pointer" />
            </button>
            <button
              className="btn text-white-50 ms-3 fs-sm border border-secondary-200"
              style={{
                padding: "2px 10px 3px",
              }}
              onClick={this.switchToCurrentDay}
            >
              Today
            </button>
          </div>
        </header>

        <main className="inbox-list-box week-switcher py-2">
          <div
            className="upcomingCalender shadow rounded mb-2 bg-darkApp-body z-22 d-flex flex-column flex-nowrap align-items-center fs-sm overflow-hidden"
            style={{
              height: "97px",
              scrollBehavior: "smooth",
              position: "sticky",
              top: "60px",
            }}
          >
            <div
              className="upcomingCalender-day-date gap-3 smooth d-flex flex-wrap gap-2"
              style={{
                scrollBehavior: "smooth",
                transform: `translateY(${this.state.verticalOffset}px)`,
              }}
            >
              {[...Array(this.state.daysInMonth)].map((day, i) => {
                return (
                  <div
                    key={`${day}--${i}`}
                    className="day d-flex flex-column align-items-center gap-3 hover-gray px-4 py-3 fs-sm cursor-pointer text-secondary"
                    style={{
                      width: "calc(100% / 8)",
                      height: "95px",
                      borderTop: "2px solid transparent",
                      borderBottom: "2px solid transparent",
                    }}
                    onClick={dayFocus}
                  >
                    <div className="day-date fw-bold text-light">
                      <div>
                        {new Date(
                          this.state.thisYear,
                          this.state.thisMonth,
                          this.state.thisDay + i
                        ).toLocaleString("en-US", {
                          weekday: "short",
                        })}
                      </div>
                    </div>
                    <div
                      className="day-date"
                      id={new Date(
                        this.state.thisYear,
                        this.state.thisMonth,
                        this.state.thisDay + i
                      ).toLocaleString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    >
                      {new Date(
                        this.state.thisYear,
                        this.state.thisMonth,
                        this.state.thisDay + i
                      ).toLocaleString("en-US", {
                        day: "2-digit",
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <section>
            <Suspense
              fallback={
                <div className="lazy-loader text-center mt-4">
                  <div className="spinner-border text-danger"></div>
                </div>
              }
            >
              {[...Array(20)].map((day, i) => {
                //Wow hahaha 
              
                return (
                  // <List height={500} itemCount={20} 
                  // // itemData={}
                  // itemSize={100}
                  // width="100%">
                  //   {Row}
                  // </List>
                  <FutureTasks
                    key={`${day}--${i}_${Math.random() * 332}`}
                    dayDate={new Date(
                      this.state.thisYear,
                      this.state.thisMonth,
                      this.state.thisDay + i
                    ).toLocaleString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  >
                    <TaskList
                      storageKey={new Date(
                        this.state.thisYear,
                        this.state.thisMonth,
                        this.state.thisDay + i
                      ).toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    />
                  </FutureTasks>

                );
              })}
            </Suspense>
          </section>
        </main>
      </>
    );
  }
}

export default MainUpcomingState;