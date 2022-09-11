import { Component } from "../../utils/modules";
// import "./_face.sass";
class Face extends Component {
  render() {
    return (
      <>
        <div className="face">
          <div className="getstarted text-center">
            <div className="container">
              <h2 className="fw-bold my-5">Organize it all with Todoist</h2>
              <button className="btn btn-semiRed text-light fs-5 fw-bold rounded-2">
                Get Started
              </button>
              <img
                src="https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp"
                alt=""
                className="img-thumbnail border-0"
              />
            </div>
          </div>

          <div className="images">
            <div className="container">
              <div className="image-wrapper">
                <img
                  src="https://todoist.com/_next/static/images/screenshot@2x_44c1cf78bc12457546d889573e04345a.webp"
                  alt=""
                  className="img-thumbnail border-0"
                />
                <img
                  src="https://todoist.com/_next/static/images/screenshot-phone@2x_e35aacb2dec92f091fce33a2ba8e99b5.webp"
                  alt=""
                  className="img-thumbnail border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Face;
