import {
  Component,
  VscArrowRight,
  AiOutlinePlayCircle,
} from "../../utils/modules.jsx";
class MentalSpace extends Component {
  render() {
    return (
      <>
        <section className="hint py-3 text-center">
          <div className="container">
            <h1>Free up your mental space</h1>
            <p className="w-75 mx-auto">
              Regain clarity and calmness by getting all those tasks out of your
              head and onto your to-do list (no matter where you are or what
              device you use).
            </p>
            <div className="buttons">
              <button className="d-inline-flex align-items-center btn text-primary">
                <VscArrowRight className="mx-2" />
                Browse Todoist’s features
              </button>
              <button className="d-inline-flex align-items-center btn text-primary">
                <AiOutlinePlayCircle className="mx-2" />
                See Todoist in action
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MentalSpace;
