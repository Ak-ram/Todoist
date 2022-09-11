import {
  Component,
  WomanIcon,
  CgMore,
  CommentIcon,
  SortIcon,
  TaskList,
  FutureTasks,
} from "../../../utils/modules";
import { ContextMenu } from "../../../utils/functions";
class MainInboxState extends Component {
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
        <header className="status-header d-flex align-items-center justify-content-between pt-4 bg-darkApp-body top-0 z-33 position-sticky">
          <h4 className="state">Inbox</h4>
          <div className="state-options fs-sm d-flex gap-2 align-items-center text-white-50">
            <span
              className="hover-gray smooth-fast p-1 rounded cursor-pointer"
              style={{ lineHeight: "22px" }}
            >
              <CommentIcon />
            </span>
            <span
              className="hover-gray smooth-fast p-1 rounded cursor-pointer"
              style={{ lineHeight: "22px" }}
              id="contextMenuForSorting"
              onClick={ContextMenu}
            >
              <SortIcon />
            </span>
            <span
              className="hover-gray smooth-fast p-1 rounded cursor-pointer"
              style={{ lineHeight: "22px" }}
              onClick={ContextMenu}
              id="contextMenuMainInbox"
            >
              <CgMore size="20" />
            </span>
          </div>
        </header>

        <FutureTasks>
          <TaskList storageKey={"inbox-tasks"} />
        </FutureTasks>
        <section className="w-50 m-auto clear-day">
          <div className=" m-auto shake-y" style={{ width: "220px" }}>
            <WomanIcon />
          </div>
          <div className="text-center fs-sm text-secondary">
            <h6 className="text-light">All clear</h6>
            <p>Looks like everything's organized in the right place.</p>
          </div>
        </section>
      </>
    );
  }
}

export default MainInboxState;
