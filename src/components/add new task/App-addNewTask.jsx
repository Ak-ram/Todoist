import {
  Component,
  InboxIcon,
  ScheduleIcon,
  IoFlagOutline,
  LabelIcon,
  ReminderIcon,
} from "../../utils/modules";
import { addTaskBtn,cancelTastBtn } from "../../utils/functions.js";
class AddNewTask extends Component {
  render() {
    return (
      <>
        <div
          className="add-new-task-container d-none mb-3 position-relative smooth m-auto"
        >
          <section
            className="add-new-task text-muted p-3 m-auto border-bottom border-semiRed rounded-top"
            style={{ background: "#171717" }}
          >
            <input
              type="text"
              className="fw-bold d-block bg-transparent border-0 text-muted w-100 outline-none my-2"
              placeholder='What is in your mind ?'
              onChange={addTaskBtn}
              data-type='taskName'
            />
            <input
              type="text"
              className="fs-sm d-block bg-transparent border-0 text-muted w-100 outline-none"
              placeholder="Description"
              // onInput={taskDescription}
            />

            <footer className="d-flex mt-2 justify-content-between align-items-center">
              <div className="left-side d-flex gap-3">
                <button
                  className="d-flex align-items-end gap-1 hover-gray smooth bg-transparent border-darkApp-navbar px-2 text-secondary fs-sm border rounded text-capitalize"
                  style={{ padding: "5px" }}
                >
                  <ScheduleIcon /> schedule
                </button>
                <button
                  className="d-flex align-items-end gap-1 hover-gray smooth bg-transparent border-darkApp-navbar  px-2 text-secondary fs-sm border rounded text-capitalize"
                  style={{ padding: "5px" }}
                >
                  <InboxIcon size="17px" />
                  inbox
                </button>
              </div>
              <div className="right-side d-flex gap-3">
                <button className="border-0 bg-transparent py-0 smooth rounded text-secondary hover-gray">
                  <LabelIcon />
                </button>
                <button className="border-0 bg-transparent py-0 smooth  rounded text-secondary hover-gray">
                  <IoFlagOutline />
                </button>

                <button className="border-0 bg-transparent py-0 smooth rounded text-secondary hover-gray">
                  <ReminderIcon />
                </button>
              </div>
            </footer>
          </section>
          <footer className="mt-4 d-flex align-items-center gap-2">
            <button
              className="btn bg-semiRed disabled cursor-no-drop pointer-events-all-i text-light fs-sm fw-bold"
              // from https://stackoverflow.com/questions/50349017/how-can-i-change-cursor-for-disabled-button-or-a-in-bootstrap-4
              data-btn-name="addTaskBtn"
              disabled
            >
              Add task
            </button>
            <button
              className="btn border text-white-50 fs-sm hover-gray text-capitalize"
              onClick={cancelTastBtn}
            >
              cancle
            </button>
          </footer>
        </div>
      </>
    );
  }
}

export default AddNewTask;
