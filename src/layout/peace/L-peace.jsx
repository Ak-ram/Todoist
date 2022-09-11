import {Component} from '../../utils/modules.jsx'
class Peace extends Component {
    render() { 
        return (
          <>
            <section
              className="peace border-bottom my-5 py-3"
              style={{ background: "#fff9f3" }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="peace__img col-6 d-none d-md-block"
                    style={{ mixBlendMode: "multiply" }}
                  >
                    <img
                      src="https://todoist.com/_next/static/images/peace@2x_c77d14499cb7c869fbbd49c2b98f9305.png"
                      alt=""
                      className="img-thumbnail border-0 w-75"
                    />
                  </div>
                  <div className="peace__content d-flex flex-grow-1 flex-column col-5 justify-content-center text-center">
                    <h2 className="my-4">
                      Achieve peace of mind with Todoist
                    </h2>
                    <button className="btn btn-semiRed fs-5 mx-auto fw-bold text-light text-capitalize">
                      get started
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
}
 
export default Peace;