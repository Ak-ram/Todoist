import { Component, Brand } from "../../../utils/modules";
import "./loader.sass";
class Loader extends Component {
  render() {
    return (
      <>
        <section className="loader position-absolute d-flex flex-column align-items-center justify-content-center bg-dark w-100 vh-100">
          <div className="position-relative">
            <span className="brand position-absolute w-100 h-100 top-0">
              <Brand />
            </span>
            <div className="loader-cover d-flex h-100 w-25 position-absolute top-0">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Loader;
