import {
  Component,
  GrDrag,
  WaterDropIcon,
  IoEllipsisHorizontalSharp,
} from "../../../../utils/modules";
// import { BiGridVertical } from "react-icons/bi";
import {
  makeMeDraggable,
  makeMeUnDraggable,
  ContextMenu,
} from "../../../../utils/functions";
class FiltersPanContent extends Component {
  state = {
    labels: [
      "Assigned to me",
      "Assigned to others",
      "Priority 1",
      "Priority 2",
      "Priority 3",
      "Priority 4",
      "View all",
      "No due date",
    ],
  };

  render() {
    return (
      <>
        {this.state.labels.map((label, i) => {
          return (
            <li
              key={(Math.random() * 332113).toString()}
              className="pane new-added-task fw-normal col-12 nav-item d-flex align-items-center justify-content-between border-top border-bottom border-darkApp-navbar fs-sm text-secondary cursor-pointer smooth-fast"
            >
              <div className="d-flex align-items-center rounded flex-grow-1 ">
                <span
                  className="main-dragable-side  fs-6 cursor-move d-flex rounded px-1"
                  onMouseOver={makeMeDraggable}
                  onMouseLeave={makeMeUnDraggable}
                >
                  <GrDrag />
                </span>

                <span
                  data-name="taskItemName"
                  className="showHint hover-gray py-1 d-flex flex-grow-1"
                  data-hint={label}
                >
                  <WaterDropIcon />
                  {label}
                </span>
              </div>
              <div className=" d-flex justify-content-end gap-2 align-items-center">
                <span
                  className="text-center hover-gray smooth-fast rounded p-1"
                  style={{ minWidth: "32px" }}
                >
                  <IoEllipsisHorizontalSharp
                    size="17"
                    // className="fade"
                    id="contextMenuFilterPane"
                    onClick={ContextMenu}
                  />
                </span>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default FiltersPanContent;
