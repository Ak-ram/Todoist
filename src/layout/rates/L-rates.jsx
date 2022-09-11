import { Component } from "../../utils/modules.jsx";
class Rates extends Component {
  render() {
    return (
      <>
        <section
          className="rates py-5 text-center"
          style={{
            backgroundImage:
              "url(https://todoist.com/_next/static/images/reviews@2x_a3f18dbb7235b35dd2167c04c25b4187.jpg)",
            backgroundSize: "auto 200%",
            backgroundPosition: "center ",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container flex-wrap d-flex justify-content-between">
            <div className="n-1 col-12 col-lg border-bottom border-gold">
              <span className="d-block  py-2">Google Play</span>
              <span className="d-block  py-2">★★★★★</span>
              <p className="fw-bold fs-4">
                Editor’s Choice 4.7 stars, 187K+ reviews
              </p>
            </div>
            <div className="n-2 col-12 col-lg border-bottom border-gold">
              <span className="d-block  py-2">App Store</span>
              <span className="d-block  py-2">★★★★★</span>
              <p className="fw-bold fs-4">
                Featured app 4.8 stars, 30K+ reviews
              </p>
            </div>
            <div className="n-3 col-12 col-lg border-bottom border-gold">
              <span className="d-block  py-2">The Verge</span>
              <span className="d-block  py-2">9/10</span>
              <q className="fw-bold fs-4 mb-3">The best to-do list app right now</q>
            <p className="don't fill me"></p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Rates;
