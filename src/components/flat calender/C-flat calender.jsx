import { BsChevronLeft, BsChevronRight, BsCircle } from "react-icons/bs";
import { Component } from "../../utils/modules";
import { daysHeadsFirstState, daysHeadsSecondState,flashEffect } from "../../utils/functions";
class FlatCalender extends Component {
  state = {
    currentMonth: new Date().getMonth() + 1,
    currentYear: new Date().getFullYear(),
    daysInMonth: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate(),
  };

  componentDidMount() {
    let nextWeekSwitcher = document.querySelector(".switch-to-next-week"),
    currentWeekSwitcher = document.querySelector('.switch-to-current-week'),
      prevWeekSwitcher = document.querySelector(".switch-to-prev-week"),
      calenderFlatDay = document.querySelectorAll(".calender-flat-day"),
      today = new Date().getDate();

    // next week switcher button
    nextWeekSwitcher.addEventListener("click", () => {
      this.setState({
        currentMonth: this.state.currentMonth + 1,
        daysInMonth: new Date(
          this.state.currentYear,
          this.state.currentMonth,
          0
        ).getDate(),
      });
      if (this.state.currentMonth === 13) {
        this.setState({
          currentMonth: 1,
          currentYear: this.state.currentYear + 1,
        });
      }
    });
    // current week switcher button [outline circle]
    currentWeekSwitcher.addEventListener('click',()=>{
  
      calenderFlatDay.forEach((day) => {
        day.classList.remove("fw-bold", "text-danger")
          this.setState({
            currentMonth: new Date().getMonth()+1,
            currentYear: new Date().getFullYear()
          })
          if(+day.textContent === new Date().getDate() && this.state.currentMonth === new Date().getMonth() + 1 &&
          this.state.currentYear === new Date().getFullYear() )
            {
              day.classList.remove("text-white")
              day.classList.add("fw-bold", "text-danger")
            }else{
              day.classList.remove("fw-bold", "text-danger")
            }
      });
    })
    // prev week switcher button
    prevWeekSwitcher.addEventListener("click", () => {
      this.setState({
        currentMonth: this.state.currentMonth - 1,
        daysInMonth: new Date(
          this.state.currentYear,
          this.state.currentMonth,
          0
        ).getDate(),
      });
      if (this.state.currentMonth === 0) {
        this.setState({
          currentMonth: 12,
          currentYear: this.state.currentYear - 1,
        });
      }
    });
    // Set day stack colors and pointer event state
    calenderFlatDay.forEach((day) => {
      +day.textContent > today
        ? day.classList.add("text-white")
        : +day.textContent < today
        ? day.classList.add("pointer-events-none")
        : day.classList.add("fw-bold", "text-danger");
    });
    if (this.state.currentMonth <= new Date().getMonth() + 1) {
  prevWeekSwitcher.classList.add("pointer-events-none");
    }
  }

  componentDidUpdate() {
    let calenderFlatDay = document.querySelectorAll(".calender-flat-day"),
      prevWeekSwitcher = document.querySelector(".switch-to-prev-week");
    // Remove today style and add white color to the upcoming days
    if (
      this.state.currentMonth > new Date().getMonth() + 1 ||
      this.state.currentYear > new Date().getFullYear()
    ) {
      calenderFlatDay.forEach((day) => {
        day.classList.remove("fw-bold", "pointer-events-none");
        day.classList.add("text-white");
      });
    }

    // Handle upcoming days color on clicking on swithcer buttons
    if (
      this.state.currentMonth > new Date().getMonth() + 1 ||
      this.state.currentYear > new Date().getFullYear()
    ) {
      prevWeekSwitcher.classList.remove("pointer-events-none");
    } else {
      prevWeekSwitcher.classList.add("pointer-events-none");
    }

  }
  render() {
    return (
      <div
        className="flat-calender user-select-blocked d-none gap-2 position-absolute top-100 fs-sm d-flex flex-column shadow rounded-1 p-2 border border-darkApp-navbar bg-darkApp-body"
        style={{ width: "250px" }}
        onMouseLeave={daysHeadsSecondState}
        >
        <header className="d-flex align-items-center justify-content-between">
          <div className="current-date col-5">
            <span>{new Date(
            this.state.currentYear,
            this.state.currentMonth,
            1
          ).toLocaleString("en-US", { month: "short" })}</span> {"  "}
            <span>{this.state.currentYear}</span>
          </div>
          <div className="date-controls col-5 d-flex align-items-center justify-content-end gap-3 ">
            <span className="cursor-pointer switch-to-prev-week smooth"  onClick={flashEffect}>
              <BsChevronLeft size="10" />
            </span>
            <span className="cursor-pointer switch-to-current-week" onClick={flashEffect}>
              <BsCircle size="6" />
            </span>
            <span className="cursor-pointer switch-to-next-week smooth"  onClick={flashEffect}>
              <BsChevronRight size="10" />
            </span>
          </div>
        </header>
        <main
          className="flat-calender-days"
          style={{ boxShadow: "0px -1px #323232" }}
        >
          <div className="day-head d-flex justify-content-center align-items-center gap-2 mt-1 fw-bold text-danger">
            <span className='text-gold'>Dream Bigger, Do Bigger</span>
          </div>
          <div className="days-stack d-flex py-2 gap-2 flex-wrap align-items-center">
            {[...Array(this.state.daysInMonth)].map((e, i) => {
              return (
                <span
                  key={`unique-${i}`}
                  onMouseMove={daysHeadsFirstState}
                  className="calender-flat-day text-secondary lh-23 hover-gray smooth-fast rounded cursor-pointer text-center"
                  style={{ width: `calc(100% / 9)` }}
                >
                  {i + 1}
                </span>
              );
            })}
          </div>
        </main>
        <footer className="text-white-50 fw-bold border-top border-darkApp-navbar pt-1">
          {new Date(
            this.state.currentYear,
            this.state.currentMonth,
            1
          ).toLocaleString("en-US", { month: "short" })}
        </footer>
      </div>
    );
  }
}

export default FlatCalender;
