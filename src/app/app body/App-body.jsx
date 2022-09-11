import {
  Component,
  AppAside,
  AppMain,
  ProjectsPanePopUp,
  LabelsPanePopUp,
  FiltersPanePopUp,
  ContextMenu,
  ScheduleSection,
  Tooltip
} from "../../utils/modules";
import {
  ContextMenu_ProjectPane,
  ContextMenu_FilterPane,
  ContextMenu_MainInbox,
  ContextMenu_ForTask,
  contextMenu_ForSorting,
} from "../../utils/data";
class AppBody extends Component {
  // close elements [Menues,flatCalender] from outside
  componentDidMount = () => {
    let elementsToClose = document.querySelectorAll(
      '[data-close="close-from-outside"]'
    )

    window.addEventListener("mouseup", (e) => {
      if (e.target.getAttribute('data-close') !== 'close-from-outside') {
        for (let i = 0; i < elementsToClose.length; i++) {
          elementsToClose[i].classList.add("d-none");
        }
      }
    });
    // stop closing element when clicking into it's childrens
    for (let i = 0; i < elementsToClose.length; i++) {
      elementsToClose[i].onmouseup = (function (e) {
        e.stopPropagation()
      })
    }

  };
  render() {
    return (
      <>
        <section className="appBody bg-darkApp-body">
          <div className="row w-100 h-100 m-0">
            <AppAside />
            <ProjectsPanePopUp />
            <LabelsPanePopUp />
            <FiltersPanePopUp />
            <ContextMenu
              id="contextMenuProjectPane"
              contextData={{ ContextMenu_ProjectPane }}
            />
            <ContextMenu
              id="contextMenuFilterPane"
              contextData={{ ContextMenu_FilterPane }}
            />
            <ContextMenu
              id="contextMenuMainInbox"
              contextData={{ ContextMenu_MainInbox }}
            />
            <ContextMenu
              id="contextMenuForTask"
              contextData={{ ContextMenu_ForTask }}
            >
              <ScheduleSection />
            </ContextMenu>
            <ContextMenu
              id="contextMenuForSorting"
              contextData={{ contextMenu_ForSorting }}
            />
            <AppMain />

            <Tooltip />
          </div>
        </section>
      </>
    );
  }
}

export default AppBody;
