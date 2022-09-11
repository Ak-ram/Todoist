import {
  Component,
  VscChevronDown,
  navbarLinks,
  resourcesList,
  Brand
} from "../../utils/modules.jsx";
import { NavLink } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar--home navbar navbar-expand-lg navbar-light">
          <div className="container-fluid position-absolute align-items-baseline">
            <a className="navbar-brand h-100" href="#d">
              <Brand />
            </a>
            <button
              class="navbar-toggler outline-none d-md-none"
              type="button" 
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(e)=>e.currentTarget.nextSibling.classList.toggle('d-none')}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              // className="collapse navbar-collapse h-100"
              className='navigation-bar mt-3 d-md-flex flex-grow-1 flex-column flex-md-row justify-content-center d-none'
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100 align-items-center flex-md-row">
                {navbarLinks.slice(0, 5).map((link, i) => {
                  if (i === 3) {
                    return (
                      <li key={`-_-_${Math.random() * 278 - 2}_-_-`} className="nav-item h-100 px-2 d-flex align-items-center dropdown">
                        <a
                          className="nav-link link-hover-none col-12 col-md-2 w-100"
                          href="#f"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          resources
                          <VscChevronDown />
                        </a>
                        <ul
                          className="dropdown-menu p-0 position-absolute"
                          aria-labelledby="navbarDropdown"
                        >
                          {resourcesList.map((resource) => {
                            return (
                              <>
                                <li key={`_--_${Math.random() * 23 - 2}_--_`} className="border-bottom">
                                  <a
                                    className="dropdown-item link-hover-none py-2"
                                    href="#d"
                                  >
                                    <div>
                                      <h6 className="d-block">
                                        {resource.head}
                                      </h6>
                                      <p className="text-lowercase">
                                        {resource.body}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={`--__${Math.random() * 23 - 2}__--`} className="nav-item h-100 px-2 d-flex align-items-center">
                        <NavLink
                          className="nav-link link-hover-none"
                          aria-current="page"
                          to={link}
                        >
                          {link}
                        </NavLink>
                      </li>
                    );
                  }
                })}
              </ul>

              <ul className="navbar-nav h-100 flex-md-row">
                {navbarLinks
                  .slice(navbarLinks.length - 2, navbarLinks.length)
                  .map((link, i) => {
                    return (
                      <li key={`index-${i}`} className="nav-item h-100 px-2 d-flex align-items-center">
                        <NavLink
                          className="nav-link link-hover-none"
                          aria-current="page"
                          to={link}
                        >
                          {link}
                        </NavLink>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
