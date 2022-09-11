import {
  Component,
  InboxIcon,
  TodayIcon,
  UpcomingIcon,
  VscChevronRight,
  PlusIcon,
  ProjectsPaneContent,
  LabelsPaneContent,
  FiltersPaneContent,
} from "../../utils/modules";
import { NavLink } from "react-router-dom";
import {
  ProjectsPopUp,
  LabelsPopUp,
  FiltersPopUp,
  DetailsHandling,
} from "../../utils/functions.js";
import "./aside.sass";
class AppAside extends Component {
  state = {
    asideMaster: [
      { label: "inbox", icon: <InboxIcon size="24px" />, num: 0 },
      { label: "today", icon: <TodayIcon size="24px" />, num: 1 },
      { label: "upcoming", icon: <UpcomingIcon />, num: 0 },
    ],
    asidePanes: [
      {
        name: "Projects",
        content: <ProjectsPaneContent />,
        popupAction: ProjectsPopUp,
      },
      {
        name: "Labels",
        content: <LabelsPaneContent />,
        popupAction: LabelsPopUp,
      },
      {
        name: "Filters",
        content: <FiltersPaneContent />,
        popupAction: FiltersPopUp,
      },
    ],
    mainPath: '/app'
  };
  // prevent appBody overflow on large screens
  componentDidMount = () => {
    const appBody = document.querySelector(".appBody"),
      navbar = document.querySelector(".appNavbar"),
      navbarWidth = +window
        .getComputedStyle(navbar)
        .getPropertyValue("height")
        .slice(
          0,
          window.getComputedStyle(navbar).getPropertyValue("height").length - 2
        );
    appBody.style.height = `calc(100vh - ${navbarWidth}px)`;
  
  };

  render() {
    return (
      <>
        <aside
          data-name="App-aside"
          className="aside w-0 panel h-100 todoist-scrollbar d-flex col-3 pt-5 px-0 bg-darkApp-navbar"
          >
          <div className="container pe-0 d-flex gap-3">
            <ul className="navbar-nav gap-2 pt-2 px-2 col">
              {this.state.asideMaster.map((item, i) => {
                return (
                  <li
                    key={(Math.random() * 1321912).toString()}
                    className="nav-item nav-link hover-gray smooth-fast px-2 py-1 rounded-3"
                  >
                    <NavLink
                      to={`${this.state.mainPath}/${item["label"]}`}
                      // onClick={()=>{window.history.pushState(null, null, "./app/today")}}
                      className="d-flex align-items-center justify-content-between link-hover-none"
                    >
                      <span className="fs-sm flex-grow-1">
                        {item["icon"]} {item["label"]}
                      </span>
                      <span className=" fs-sm">{item["num"]}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="text-light detailsBox px-2 col">
              {this.state.asidePanes.map((pane, i) => {
                return (
                  <details
                    key={(Math.random() * 1912).toString()}
                    className="panes my-3 fs-sm fw-bold"
                    onClick={DetailsHandling}
                  >
                    <summary className="d-flex align-items-center justify-content-between">
                      <span>
                        <VscChevronRight
                          size="17"
                          className="paneChevron me-2"
                        />
                        {pane.name}
                      </span>
                      <PlusIcon
                        size="20px"
                        classes="plusIcon smooth-fast fade rounded-1"
                        onClick={pane.popupAction}
                      />
                    </summary>
                    <div
                      // key={(Math.random() * 133912).toString()}
                      data-pane={`${pane.name}-pane`}
                      className="sidebar_pane todoist-scrollbar nav-item nav-link d-flex align-items-center justify-content-between fs-sm fw-bold text-light pointer p-0 pe-2"
                    >
                      <div className="pane-container w-100 pt-3">{pane.content}</div>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default AppAside;
