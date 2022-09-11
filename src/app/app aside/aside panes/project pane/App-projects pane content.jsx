import {
  Component,
  GrDrag,
  GoPrimitiveDot,
  IoEllipsisHorizontalSharp,
  SynLoader,
} from "../../../../utils/modules";
import {
  ContextMenu,
  makeMeDraggable,
  makeMeUnDraggable,
} from "../../../../utils/functions.js";
class ProjectsPaneContent extends Component {
  render() {
    return (
      <>
        <li
          key={(Math.random() * 332113).toString()}
          className="pane new-added-task fw-normal col-12 nav-item d-flex align-items-center justify-content-between border-top border-bottom border-darkApp-navbar fs-sm text-secondary cursor-pointer smooth-fast"
        >
          <div className="d-flex align-items-center rounded flex-grow-1 ">
            <span
              className="main-dragable-side fs-6 cursor-move rounded px-1 d-flex"
              onMouseOver={makeMeDraggable}
              onMouseLeave={makeMeUnDraggable}
            >
              {/* <GrDrag color="red" className="svg-white-color" /> */}
              <GrDrag className="svg-drag-semiRed" />
            </span>

            <span
              data-name="taskItemName"
              className="showHint hover-gray py-1 d-flex align-items-center gap-1 flex-grow-1"
              data-hint="welcome 👋"
            >
              <GoPrimitiveDot size="20" />
              Welcome
              <img
                className="emoji ms-1"
                style={{ width: "15px", height: "15px" }}
                draggable="false"
                alt="👋"
                src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b.png"
              />
            </span>
          </div>
          <div className=" d-flex justify-content-end gap-2 align-items-center">
            <span
              className="text-center hover-gray smooth-fast rounded p-1"
              style={{ minWidth: "32px" }}
            >
              <IoEllipsisHorizontalSharp
                onClick={ContextMenu}
                id="contextMenuProjectPane"
              />
            </span>
          </div>
        </li>
        <div className="archieved-content d-flex align-items-center text-secondary fw-normal">
          <span className="fade col-2 smooth-fast">
            {" "}
            <SynLoader />
          </span>

          <button
            onClick={(e) => {
              e.currentTarget.previousSibling.classList.remove("fade");
              setTimeout(
                () => {
                  e.target.previousSibling.classList.add("fade");
                },
                1000,
                e
              );
            }}
            className="btn fs-sm text-light d-block py-1"
          >
            Archived items
          </button>
        </div>
      </>
    );
  }
}

export default ProjectsPaneContent;
