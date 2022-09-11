import { Component, QuestionIcon, Select, CheckboxAnimated } from "../../../../utils/modules";
import "../../aside.sass";
import { labelPopupCancel, labelPopupAdd } from "../../../../utils/functions.js";

class LabelsPanePopUp extends Component {
  state = {
    labelTheme: [
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
      <div className="labelsPopUp z-3 position-absolute translate-middle start-50 top-50 shadow-sm border border-darkApp-body text-light visually-hidden px-0">
        <header className="popup__header p-3 d-flex justify-content-between justify-content-center">
          <h6 className="m-0">Add label</h6>
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
            <label htmlFor="labelName">
              <span className="d-block fs-sm fw-bold mb-1">Label name</span>
              <input
                onChange={labelPopupAdd}
                type="text"
                id="labelName"
                style={{ background: "#202020" }}
                className="border-0 w-100 text-light py-1 px-3 rounded outline-none fs-sm"
              />
            </label>
            <label>
              <span className="d-block fs-sm fw-bold mb-1">Label color</span>
              <Select />
            </label>

            <div className="fs-sm d-flex gap-3 m-2">
              <CheckboxAnimated />
            </div>
          </form>
        </main>
        <footer className="popup__footer d-flex justify-content-end gap-2 p-3">
          <button
            className="btn text-capitalize fw-bold fs-sm text-light"
            onClick={labelPopupCancel}
          >
            cancel
          </button>
          <button
            data-name="add-label-btn"
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

export default LabelsPanePopUp;
