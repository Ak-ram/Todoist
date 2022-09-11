import {
  Component,
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PlusIcon,
  GraphIcon,
  QuestionIcon,
  BellIcon,
  AvatarIcon,
  VscClose,
  Notify,
  TaskProgression,
} from "../../utils/modules";
import {
  toggleAsideMenu,
  searchFocusing,
  searchBluring,
  notifyBody,
  notifiyLength,
  plusIcon,
  taskProgression,
} from "../../utils/functions.js";
import { NavLink } from "react-router-dom";
import "./app-navbar.sass";

class AppNavbar extends Component {
state={
  todayPath: 'today'
}
  render() {
    return (
      <>
        <nav className="appNavbar navbar navbar-expand-lg navbar-dark bg-darkApp-navbar p-0 shadow">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse justify-content-between d-flex flex-column flex-sm-row align-items-stretch"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav flex-row mb-lg-0 gap-2">
                <li
                  className="menuIconWrapper nav-item"
                  onClick={toggleAsideMenu}
                >
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    <MenuIcon />
                  </NavLink>
                </li>

                <li className="showHint nav-item" data-hint="Go to Home view">
                  <NavLink className="nav-link" to={this.state.todayPath}> {/*Issue */}
                    <HomeIcon />
                  </NavLink>
                </li>

                <li
                  className={`inputField nav-item d-flex align-items-center position-relative flex-grow-1 smooth-fast `}
                  onFocus={searchFocusing}
                  onBlur={searchBluring}
                >
                  <SearchIcon />
                  <input
                    type="text"
                    data-name="search-box"
                    defaultValue="Search"
                    className="position-relative rounded-1 border-0 fs-sm text-light w-100"
                  />

                  <ul className="searchOptions position-absolute end-0 d-flex align-items-center justify-content-center p-0 me-2 gap-1">
                    <li
                      data-item="item-1"
                      className="showHint list-unstyled fade"
                      data-hint="Quick search"
                    >
                      <NavLink
                        to="#d"
                        className="border fw-bold rounded-1 text-lowercase"
                      >
                        f
                      </NavLink>
                    </li>
                    <li
                      data-item="item-2"
                      className="showHint list-unstyled d-none"
                      data-hint="How to use search"
                    >
                      <NavLink to="#d">
                        <QuestionIcon />
                      </NavLink>
                    </li>
                    <li data-item="item-3" className="list-unstyled d-none">
                      <NavLink to="#d">
                        <VscClose size="26" className="hover-text-semiRed" />
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav flex-row mb-lg-0 gap-2 justify-content-evenly">
                <li className="showHint nav-item"
                  data-hint={`Double click`}
                  onDoubleClick={plusIcon}
                >
                  <NavLink className="nav-link" aria-current="page" to="app/today">
                    <PlusIcon size="26px" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link graph link-hover-none"
                    aria-current="page"
                    to="#d"
                    onClick={taskProgression}
                  >
                    <GraphIcon /> <small>0/5</small>
                  </NavLink>
                  <TaskProgression />
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link question"
                    aria-current="page"
                    to="#d"
                  >
                    <QuestionIcon />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link bell showHint"
                    aria-current="page"
                    to="#d"
                    onClick={notifyBody}
                    onMouseMove={notifiyLength}
                  >
                    <BellIcon />
                  </NavLink>
                  <Notify />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="#d">
                    <AvatarIcon />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default AppNavbar;
