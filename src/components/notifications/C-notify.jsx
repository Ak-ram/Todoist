import {
  Component,
  IoCheckmarkDone,
  VscCircleFilled,
  FaLightbulb,
  GiLaurelsTrophy,
} from "../../utils/modules";
import { markNotifyAsRead } from "../../utils/functions.js";
class Notify extends Component {
  render() {
    return (
      <section
        className="notify-body d-none smooth-fast position-absolute z-100 rounded px-0 fs-sm shadow border border-darkApp-body"
        style={{
          background: "#282828",
          width: "450px",
          boxShadow: "0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%)",
        }}
      >
        <header
          className="d-flex text-light border-bottom border-semiRed py-0 px-2 align-items-center justify-content-between"
          style={{ height: "50px" }}
        >
          <div className="notify d-flex gap-3 px-3 h-100">
            <button className="bg-transparent notify-btn-focusing border-0 text-secondary text-capitalize fs-sm">
              notifications
            </button>
            <button className="bg-transparent notify-btn-focusing border-0 text-secondary text-capitalize fs-sm">
              unread
            </button>
          </div>
          <div className="mark-all-as-read-icon px-1 hover-gray rounded cursor-pointer">
            <IoCheckmarkDone
              size="18"
              className="showHint"
              data-hint="Read all"
            />
          </div>
        </header>

        <main className="d-flex flex-column">
          <div className="d-flex border-bottom border-secondary-200 cursor-pointer align-items-center justify-content-between rounded-bottom hover-dark p-3">
            <div
              className="notify-icon position-relative col-1 align-self-start py-2 bg-semiRed rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <FaLightbulb
                className="position-absolute top-50 start-50 translate-middle"
                size="26"
                color="#fff"
              />
            </div>
            <div className="notify-content col-9">
              <p className=" text-light ">
                Your journey towards higher productivity begins today! You're
                now a Todoist Karma Novice.
              </p>
            </div>
            <span
              className="showHint position-relative mark-as-read col-1 align-self-end text-center border rounded-circle"
              style={{ width: "15px", height: "15px" }}
              data-hint="Read"
            >
              <VscCircleFilled
                className="position-absolute fade start-0 cursor-pointer"
                onClick={markNotifyAsRead}
                color="#fff"
              />
            </span>
          </div>
          <div className="d-flex border-bottom border-secondary-200 cursor-pointer align-items-center justify-content-between rounded-bottom hover-dark p-3">
            <div
              className="notify-icon position-relative col-1 align-self-start py-2 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <GiLaurelsTrophy
                className="position-absolute top-50 start-50 translate-middle"
                size="33"
                color="#ff0"
              />
            </div>
            <div className="notify-content col-9">
              <p className=" text-light ">
                Your journey towards higher productivity begins today! You're
                now a Todoist Karma Novice.
              </p>
            </div>
            <span
              className="showHint position-relative mark-as-read col-1 align-self-end text-center border rounded-circle"
              style={{ width: "15px", height: "15px" }}
              data-hint="Read"
            >
              <VscCircleFilled
                className="position-absolute fade start-0 cursor-pointer"
                onClick={markNotifyAsRead}
                color="#fff"
              />
            </span>
          </div>
        </main>
      </section>
    );
  }
}

export default Notify;
