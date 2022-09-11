import {
  Component,
  EditIcon,
  IoEllipsisHorizontalSharp,
  CgCheck,
  ScheduleIcon,
  CommentIcon,
  GrDrag,
} from "../../utils/modules";
import {
  makeMeDraggable,
  makeMeUnDraggable,
  ContextMenu,
  expandTask,
  editTask,
  closeExpandedTask,
  taskComment
} from "../../utils/functions.js";
import "./newAddedTask.sass";
class TaskList extends Component {
  state = {
    storageKey: this.props.storageKey,
    storageValue:
      JSON.parse(localStorage.getItem(`${this.props.storageKey}`)) || [],
  };

  componentDidMount = () => {
    let addTaskBtn = document.querySelectorAll('[data-btn-name="addTaskBtn"]');
    for (let i = 0; i < addTaskBtn.length; i++) {
      let taskInput = addTaskBtn[i].parentNode.previousSibling.firstChild;
      addTaskBtn[i].addEventListener("click", (e) => {
        let taskNameField =
          e.currentTarget.parentNode.previousSibling.firstChild.value.trim();
        this.state.storageValue.push(taskNameField);
        this.setState({
          storageValue: this.state.storageValue,
        });
        localStorage.setItem(
          this.state.storageKey,
          JSON.stringify(this.state.storageValue)
        );
      });

      // add new task by clicking Enter button
      taskInput.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          addTaskBtn[i].click();
        }
      });
    }
  };

  // delete the task
  taskCompleted = (e) => {
    const DCM = document.querySelector(".deletion-confirmation-msg"),
      TaskAboutToRemoved = e.currentTarget.parentNode.lastChild;
    let DCMBtnIsClicked = false;
    // Handle DCM
    DCM.classList.remove("d-none");
    let start = setTimeout(() => {
      DCM.classList.add("d-none");
    }, 1500);
    DCM.lastChild.firstChild.addEventListener("click", () => {
      DCMBtnIsClicked = true;
    });
    TaskAboutToRemoved.parentNode.parentNode.classList.add("d-none");
    let end = setTimeout(() => {
      if (DCMBtnIsClicked === false) {
        // remove task from localStorage
        this.setState({
          storageValue: this.state.storageValue.filter(
            (task) => task !== TaskAboutToRemoved.children[1].textContent
          ),
        });
        localStorage.setItem(
          this.state.storageKey,
          JSON.stringify(this.state.storageValue)
        );
      } else {
        TaskAboutToRemoved.parentNode.parentNode.classList.remove("d-none");
        clearTimeout(end)
        clearTimeout(start)
      }
    }, 1500);
  };

  render() {
    return (
      <>
        {this.state.storageValue.map((label) => {
          return (
            <li
              id={this.state.storageKey}
              key={(Math.random() * 332113).toString()}
              className="new-added-task position-relative overflow-hidden smooth fw-normal col-12 nav-item d-flex flex-wrap align-items-center px-2 py-2 justify-content-between border-bottom border-darkApp-navbar fs-sm text-secondary smooth-fast"
              onClick={expandTask}
            >
              <div className="d-flex align-items-center rounded flex-grow-1 py-1">
                <span
                  className="main-dragable-side fs-6 cursor-move rounded px-1 hover-gray"
                  onMouseOver={makeMeDraggable}
                  onMouseLeave={makeMeUnDraggable}
                >
                  <GrDrag className="svg-drag-white" />
                </span>
                <button
                  className="hover-gray focus-gray position-relative mx-2 bg-transparent text-light border p-0 rounded-circle"
                  style={{ width: "17px", height: "16px" }}
                  onClick={this.taskCompleted}
                >
                  <CgCheck
                    size="16"
                    className="fade show-on-hover position-absolute translate-middle "
                  />
                </button>
                <section
                  className='text-start overflow-hidden w-100'
                  data-name="taskItemName"
                  style={{
                    lineHeight: "24px",
                    width: "300px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span className='fw-bold me-2 mb-2 ms-1 text-white small d-none'>Task :</span>
                  <span className='outline-none todoist-selection'>{label}</span>
                  <div className='d-none border rounded border-secondary-200 overflow-hidden' style={{maxWidth: '80%'}}>
                    <span className='fw-bold badge border border-secondary-200 p-2 text-warning'>Description </span>
                    <p className='task-description d-block p-2 m-0 outline-none todoist-selection todoist-scrollbar overflow-auto'>Task Description is a detailed statement of work</p>
                  </div>
                </section>

              </div>
              <div className=" d-flex justify-content-end gap-2 align-items-center">
                <span
                  className="showHint cursor-pointer text-center hover-gray smooth-fast rounded p-1"
                  style={{ minWidth: "32px" }}
                  data-hint="Edit"
                  onClick={editTask}
                >
                  <EditIcon />
                </span>
                <span
                  className="showHint cursor-pointer text-center hover-gray smooth-fast rounded p-1"
                  style={{ minWidth: "32px" }}
                  data-hint="Schedule"
                >
                  <ScheduleIcon />
                </span>
                <span
                  className="cursor-pointer text-center hover-gray smooth-fast rounded p-1"
                  style={{ minWidth: "32px" }}
                  

                >
                  <span onClick={taskComment} data-hint="Comment" className='showHint'> <CommentIcon /></span>
                  <section className='task-comment position-absolute d-none border-start border-3 border-semiRed'>
                    <textarea className='text-secondary todoist-selection p-2 outline-none w-100 overflow-hidden' name="taskComment" id="taskComment" placeholder='any comment ?'>
                    </textarea>
                  </section>
                </span>
                <span
                  className="showHint cursor-pointer text-center hover-gray smooth-fast rounded p-1"
                  style={{ minWidth: "32px" }}
                  data-hint="Actions"
                >
                  <IoEllipsisHorizontalSharp
                    size="17"
                    onClick={ContextMenu}
                    id="contextMenuForTask"
                  />
                </span>
              </div>
              <footer className='mt-3 ms-3 mb-2 col-12'>
                <button className=" border-0 p-2 bg-darkApp-body text-success fw-bold text-capitalize me-2">confirm edits</button>
                <button className="close-expanded-task p-2 border-0 bg-darkApp-body text-danger fw-bold text-capitalize" onClick={closeExpandedTask}>close</button>
              </footer>

            </li>
          );
        })}
      </>
    );
  }
}

export default TaskList;
