import {
  Component,
  QuestionIcon,
  Select,
  IoCheckmarkCircle,
  CheckboxAnimated,
} from "../../../../utils/modules";

import {
  projectPopupAdd,
  projectPopupCancel,
  projectActivateGroup,
} from "../../../../utils/functions.js";
class ProjectsPanePopUp extends Component {
  state = {
    projectTheme: [
      "Berry Red",
      "Red",
      "Orange",
      "Yellow",
      "Olive Green",
      "Lime Green",
      "Green",
      "Mint Green",
      "Teal",
      "Sky Blue",
      "Light Blue",
      "Blue",
      "Grape",
      "Violet",
      "Lavender",
      "Magenta",
      "Salmon",
      "Charcoal",
      "Gray",
      "Taupe",
    ],
  };
  render() {
    return (
      <div  className="projectsPopUp z-3 position-absolute translate-middle start-50 top-50 shadow-sm border border-darkApp-body text-light visually-hidden px-0">
        <header className="popup__header p-3 d-flex justify-content-between justify-content-center">
          <h6 className="m-0">Add project</h6>
          <span>
            <QuestionIcon classes="cursor-pointer" />
          </span>
        </header>
        <main className="popup__main">
          <form
            action=""
            method=""
            className="d-flex flex-column px-5 py-3 gap-3 "
          >
            <label htmlFor="projectName">
              <span className="d-block fs-sm fw-bold mb-1">Name</span>
              <input
                onChange={projectPopupAdd}
                type="text"
                id="projectName"
                style={{ background: "#202020" }}
                className="border-0 w-100 text-light py-1 px-3 rounded outline-none fs-sm"
              />
            </label>
            <label>
              <span className="d-block fs-sm fw-bold mb-1">Color</span>
              <Select />
            </label>

            <div className="fs-sm d-flex gap-3 m-2">
              <CheckboxAnimated />
            </div>

            <div className="fs-sm d-flex flex-column gap-3">
              <span className="d-block fs-sm fw-bold mb-1">View</span>
              <div className="labels-group d-flex justify-content-around gap-4 cursor-default">
                <label
                  data-label="group-item"
                  className="G w-50 d-flex flex-column align-items-center cursor-pointer"
                  onClick={projectActivateGroup}
                >
                  <div className="G-1-img w-100 rounded-3"></div>
                  <div className="G-1-content w-100 text-center flex-grow-1 pt-3">
                    <IoCheckmarkCircle size="20" className="G-icon mx-1" />
                    List
                  </div>
                </label>
                <label
                  data-label="group-item"
                  className="G w-50 d-flex flex-column align-items-center cursor-pointer"
                  onClick={projectActivateGroup}
                >
                  <div className="G-2-img w-100 rounded-3"></div>
                  <div className="G-2-content w-100 text-center flex-grow-1 pt-3">
                    <IoCheckmarkCircle size="20" className="G-icon mx-1" />
                    Board
                  </div>
                </label>
              </div>
            </div>
            <div className="fakeFooter">
              <p className="text-secondary">
                View is synced between teammates in shared projects.
                <a
                  href="#3"
                  className="text-danger d-inline-block link-hover-none"
                >
                  Learn more
                </a>
                .
              </p>
            </div>
          </form>
        </main>
        <footer className="popup__footer d-flex justify-content-end gap-2 p-3">
          <button
            className="btn text-capitalize fw-bold fs-sm text-light"
            onClick={projectPopupCancel}
          >
            cancel
          </button>
          <button
            data-name="add-project-btn"
            className="btn text-capitalize fs-sm text-light bg-semiRed"
            disabled
          >
            add
          </button>
        </footer>
      </div>
    );
  }
}

export default ProjectsPanePopUp;
