import { Component,Lang,Brand } from "../../utils/modules.jsx";
class Footer extends Component {
 
  render() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-between">
              <aside className="footer__left d-flex flex-column col-12 col-md-3 my-5 my-md-0">
                <Brand />
                <p className="py-4">
                  Join millions of people who organize work and life with
                  Todoist.
                </p>
                <ul className="list-group d-flex flex-row list-unstyled gap-3">
                  <li className="list-item">
                    <a href="d">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        width="25"
                      >
                        <path d="M23 12.067C23 5.955 18.075 1 12 1S1 5.955 1 12.067C1 17.591 5.023 22.17 10.281 23v-7.734H7.488v-3.199h2.793V9.63c0-2.774 1.643-4.306 4.155-4.306 1.203 0 2.462.216 2.462.216v2.724h-1.387c-1.366 0-1.792.853-1.792 1.73v2.074h3.05l-.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="d">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        width="25"
                      >
                        <path d="M22.393 3.339a8.874 8.874 0 01-2.868 1.121A4.452 4.452 0 0016.23 3c-2.49 0-4.512 2.072-4.512 4.628 0 .363.039.715.116 1.054-3.75-.193-7.076-2.034-9.304-4.837a4.711 4.711 0 00-.61 2.329c0 1.605.796 3.022 2.008 3.852a4.424 4.424 0 01-2.046-.577v.056c0 2.244 1.556 4.115 3.622 4.539a4.305 4.305 0 01-1.19.162c-.29 0-.574-.027-.849-.081.575 1.838 2.24 3.177 4.216 3.212A8.91 8.91 0 011 19.256a12.564 12.564 0 006.919 2.077c8.303 0 12.842-7.05 12.842-13.167 0-.202-.004-.403-.011-.6A9.269 9.269 0 0023 5.17a8.84 8.84 0 01-2.592.729 4.621 4.621 0 001.985-2.56z"></path>
                        <path d="M22.393 3.339a8.874 8.874 0 01-2.868 1.121A4.452 4.452 0 0016.23 3c-2.49 0-4.512 2.072-4.512 4.628 0 .363.039.715.116 1.054-3.75-.193-7.076-2.034-9.304-4.837a4.711 4.711 0 00-.61 2.329c0 1.605.796 3.022 2.008 3.852a4.424 4.424 0 01-2.046-.577v.056c0 2.244 1.556 4.115 3.622 4.539a4.305 4.305 0 01-1.19.162c-.29 0-.574-.027-.849-.081.575 1.838 2.24 3.177 4.216 3.212A8.91 8.91 0 011 19.256a12.564 12.564 0 006.919 2.077c8.303 0 12.842-7.05 12.842-13.167 0-.202-.004-.403-.011-.6A9.269 9.269 0 0023 5.17a8.84 8.84 0 01-2.592.729 4.621 4.621 0 001.985-2.56z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="d">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        width="25"
                      >
                        <g fillRule="evenodd" clipRule="evenodd">
                          <path d="M3.598 4.242C6.958 4 11.995 4 11.995 4h.01s5.038 0 8.396.242l.155.016c.515.05 1.427.138 2.25.995.72.725.954 2.371.954 2.371S24 9.557 24 11.49v1.812c0 1.933-.24 3.866-.24 3.866s-.234 1.646-.954 2.371c-.823.858-1.735.946-2.25.996-.057.005-.108.01-.155.016-3.358.241-8.401.249-8.401.249s-6.24-.057-8.16-.24c-.091-.017-.202-.03-.327-.045-.609-.073-1.562-.187-2.32-.976-.719-.725-.953-2.37-.953-2.37S0 15.234 0 13.301V11.49c0-1.933.24-3.866.24-3.866s.234-1.646.954-2.37c.823-.858 1.735-.947 2.25-.996.057-.006.108-.01.154-.016zm12.408 7.912L9.521 8.787l.001 6.711 6.484-3.344z"></path>
                          <path d="M3.598 4.242C6.958 4 11.995 4 11.995 4h.01s5.038 0 8.396.242l.155.016c.515.05 1.427.138 2.25.995.72.725.954 2.371.954 2.371S24 9.557 24 11.49v1.812c0 1.933-.24 3.866-.24 3.866s-.234 1.646-.954 2.371c-.823.858-1.735.946-2.25.996-.057.005-.108.01-.155.016-3.358.241-8.401.249-8.401.249s-6.24-.057-8.16-.24c-.091-.017-.202-.03-.327-.045-.609-.073-1.562-.187-2.32-.976-.719-.725-.953-2.37-.953-2.37S0 15.234 0 13.301V11.49c0-1.933.24-3.866.24-3.866s.234-1.646.954-2.37c.823-.858 1.735-.947 2.25-.996.057-.006.108-.01.154-.016zm12.408 7.912L9.521 8.787l.001 6.711 6.484-3.344z"></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="d">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="gray"
                        viewBox="0 0 24 24"
                        width="25"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.608 12a5.392 5.392 0 1110.784 0 5.392 5.392 0 01-10.784 0zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M17.605 7.655a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52z"></path>
                        <path
                          fillRule="evenodd"
                          d="M12 1.5c-2.852 0-3.21.012-4.33.063-1.117.051-1.88.229-2.548.488a5.146 5.146 0 00-1.86 1.211 5.146 5.146 0 00-1.21 1.86c-.26.668-.438 1.431-.489 2.549C1.513 8.79 1.5 9.148 1.5 12c0 2.852.012 3.21.063 4.33.051 1.117.229 1.88.488 2.548.269.69.628 1.276 1.211 1.86.584.583 1.17.942 1.86 1.21.668.26 1.431.438 2.549.489 1.12.05 1.477.063 4.329.063 2.852 0 3.21-.012 4.33-.063 1.117-.051 1.88-.229 2.548-.488a5.149 5.149 0 001.86-1.211 5.149 5.149 0 001.21-1.86c.26-.668.438-1.431.489-2.549.05-1.12.063-1.477.063-4.329 0-2.852-.012-3.21-.063-4.33-.051-1.117-.229-1.88-.488-2.548a5.148 5.148 0 00-1.211-1.86 5.147 5.147 0 00-1.86-1.21c-.668-.26-1.431-.438-2.549-.489C15.21 1.513 14.852 1.5 12 1.5zm0 1.892c2.804 0 3.136.01 4.243.061 1.024.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.926.362 1.95.05 1.107.061 1.44.061 4.243 0 2.804-.01 3.136-.061 4.243-.047 1.024-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.254 3.254 0 01-1.207.785c-.37.144-.926.315-1.95.362-1.107.05-1.44.061-4.243.061-2.804 0-3.136-.01-4.243-.061-1.024-.047-1.58-.218-1.95-.362-.49-.19-.84-.418-1.207-.785a3.253 3.253 0 01-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.107-.061-1.44-.061-4.243 0-2.804.01-3.136.061-4.243.047-1.024.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.253 3.253 0 011.207-.785c.37-.144.926-.315 1.95-.362 1.107-.05 1.44-.061 4.243-.061z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M6.608 12a5.392 5.392 0 1110.784 0 5.392 5.392 0 01-10.784 0zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M17.605 7.655a1.26 1.26 0 100-2.52 1.26 1.26 0 000 2.52z"></path>
                        <path
                          fillRule="evenodd"
                          d="M12 1.5c-2.852 0-3.21.012-4.33.063-1.117.051-1.88.229-2.548.488a5.146 5.146 0 00-1.86 1.211 5.146 5.146 0 00-1.21 1.86c-.26.668-.438 1.431-.489 2.549C1.513 8.79 1.5 9.148 1.5 12c0 2.852.012 3.21.063 4.33.051 1.117.229 1.88.488 2.548.269.69.628 1.276 1.211 1.86.584.583 1.17.942 1.86 1.21.668.26 1.431.438 2.549.489 1.12.05 1.477.063 4.329.063 2.852 0 3.21-.012 4.33-.063 1.117-.051 1.88-.229 2.548-.488a5.149 5.149 0 001.86-1.211 5.149 5.149 0 001.21-1.86c.26-.668.438-1.431.489-2.549.05-1.12.063-1.477.063-4.329 0-2.852-.012-3.21-.063-4.33-.051-1.117-.229-1.88-.488-2.548a5.148 5.148 0 00-1.211-1.86 5.147 5.147 0 00-1.86-1.21c-.668-.26-1.431-.438-2.549-.489C15.21 1.513 14.852 1.5 12 1.5zm0 1.892c2.804 0 3.136.01 4.243.061 1.024.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.926.362 1.95.05 1.107.061 1.44.061 4.243 0 2.804-.01 3.136-.061 4.243-.047 1.024-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.254 3.254 0 01-1.207.785c-.37.144-.926.315-1.95.362-1.107.05-1.44.061-4.243.061-2.804 0-3.136-.01-4.243-.061-1.024-.047-1.58-.218-1.95-.362-.49-.19-.84-.418-1.207-.785a3.253 3.253 0 01-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.107-.061-1.44-.061-4.243 0-2.804.01-3.136.061-4.243.047-1.024.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.253 3.253 0 011.207-.785c.37-.144.926-.315 1.95-.362 1.107-.05 1.44-.061 4.243-.061z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="footer__right d-flex gap-4 col-12 col-md-8 justify-content-between justify-content-md-end">
                <div className="column-1">
                  <p className="text-capitalize">features</p>
                  <ul className="list-unstyled">
                    <li className="text-capitalize my-3">
                      <a href="s">how it works</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">for teams</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">pricing</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">templates</a>
                    </li>
                  </ul>
                </div>
                <div className="column-2">
                  <p className="text-capitalize">resources</p>
                  <ul className="list-unstyled">
                    <li className="text-capitalize my-3">
                      <a href="s">download apps</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">help center</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">Productivity methods</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">refer a friend</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">integration</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">channel patterns</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">developer API</a>
                    </li>
                  </ul>
                </div>
                <div className="column-3">
                  <p className="text-capitalize">company</p>
                  <ul className="list-unstyled">
                    <li className="text-capitalize my-3">
                      <a href="s">about us</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">we are hiring!</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">blog</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s">press</a>
                    </li>
                    <li className="text-capitalize my-3">
                      <a href="s" className="link-secondary">
                        twist
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
          <section className="fakefooter py-3">
            <div className="container">
              <div className="row justify-content-between flex-wrap gap-3 gap-sm-0">
                <ul className="list-unstyled d-flex align-items-center m-0 gap-1 col-sm-8">
                  <li className="list-item">
                    <a href="e" className="text-secondary  text-capitalize">
                      security
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="d" className="text-secondary  text-capitalize">
                      privacy
                    </a>
                  </li>
                  <li className="list-item">
                    <a href="d" className="text-secondary text-capitalize">
                      terms
                    </a>
                  </li>
                  <li className="list-item text-capitalize">
                    &copy;doist inc.
                  </li>
                </ul>
                <ul className="list-unstyled m-0 d-flex justify-content-start justify-content-sm-end col-sm-4">
                  <li className="list-item">
                    <Lang />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </footer>
      </>
    );
  }
}

export default Footer;
