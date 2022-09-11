import { Component,PlayIcon } from "../../utils/modules.jsx";

import ReactPlayer from "react-player/youtube";
import './_celebrates.sass'

class Celebrates extends Component {
    render() { 
        return (
          <>
            <section className="celebrates">
              <div className="container d-flex text-center text-md-start flex-wrap justify-content-center align-items-center">
                <div className="celebrate-event col-9 col-md-7 my-4 my-md-0">
                  <hgroup>
                    <p className='fw-bold'>
                      Todoist has helped <br /> millions of people complete
                    </p>
                    <em className="h1 fw-bold">
                      over 1.5 billion tasks in 150+ million projects.
                    </em>
                  </hgroup>
                </div>
                <div className="celebrate-video position-relative col-9 col-md-5 ">
                  <img
                    src="https://todoist.com/_next/static/images/video-bg@2x_387cbb978cbe953e1a8e6274b41282df.jpg"
                    alt=""
                    className="img-thumbnail border-0"
                  />
                  <ReactPlayer
                    light={
                      "https://todoist.com/_next/static/images/video@2x_971845317b8ca02c1eac96939b47d9b9.webp"
                    }
                    playIcon={<PlayIcon />}
                    width="80%"
                    height="70%"
                    className="reactPlayer position-absolute top-50 translate-middle"
                    url="https://youtu.be/IL8jpc8Lik4"
                  />
                </div>
              </div>
            </section>
          </>
        );
    }
}
 
export default Celebrates;