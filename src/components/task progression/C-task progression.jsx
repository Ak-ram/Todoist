import {lazy,Suspense} from 'react'
import { Component } from "../../utils/modules";
import { progression_data } from "../../utils/data";
const ProgressionGraph = lazy(()=>import("./progression graph"))
class TaskProgression extends Component {
  state = {
    dataNumber: 0,
  };
  focusEffect = (e) => {
    let progressionRate = document.querySelectorAll(".progression-day");
    for (let i = 0; i < progressionRate.length; i++) {
      progressionRate[i].classList.remove("fw-bold", "text-light");
      progressionRate[i].classList.add("border-secondary-200");
    }
    e.currentTarget.classList.remove("border-secondary-200");
    e.currentTarget.classList.add("fw-bold", "text-light");
    this.setState({
      dataNumber: Array.prototype.indexOf.call(
        e.currentTarget.parentElement.children,
        e.currentTarget
      ),
    });
  };

  render() {
    return (
      <section
        className="task-progression d-none position-absolute z-100 mt-1 fs-sm shadow bg-darkApp-navbar text-light"
        style={{ width: "300px" }}
      >
        <header className="p-3">
          <h6 className="text-capitalize mb-4">your productivity</h6>
          <div className="d-flex align-items-center justify-content-between">
            <small><span className='num-of-completed-tasks'>{0}</span> completed tasks</small>
            <small>
              <a href="/completed tasks" className="text-semiRed">
                View all completed tasks
              </a>
            </small>
          </div>
        </header>
        <main>
          <section className="mb-2">
            <header className="d-flex justify-content-around p-3">
              <button
                className="progression-day bg-transparent border-0 text-secondary py-2 flex-grow-1 border-bottom border-secondary-200 smooth-fast"
                onClick={this.focusEffect}
              >
                Daily
              </button>
              <button
                className="progression-day bg-transparent border-0 text-secondary py-2 flex-grow-1 border-bottom border-secondary-200 smooth-fast"
                onClick={this.focusEffect}
              >
                Weekly
              </button>
              <button
                className="progression-day bg-transparent border-0 text-secondary py-2 flex-grow-1 border-bottom border-secondary-200 smooth-fast"
                onClick={this.focusEffect}
              >
                Karma
              </button>
            </header>
<Suspense fallback={<div>Loading...</div>}>
<main
              className="todoist-scrollbar d-flex flex-column gap-2"
              style={{ maxHeight: "170px", overflowY: "scroll" }}
            >
              <section className="goals-target d-flex flex-column align-items-center gap-1 border-bottom border-secondary-200 pb-3">
                <span className="goals-target__icon text-secondary-200 p-3 mb-2 border-3 border rounded-circle border-secondary-200">
                  {
                    progression_data[this.state.dataNumber][
                      "goals-target__icon"
                    ]
                  }
                </span>
                <span className="goals-target__achieved">
                  {
                    progression_data[this.state.dataNumber][
                      "goals-target__achieved"
                    ]
                  }
                </span>
                <span className="goals-target__hint text-secondary small">
                  {
                    progression_data[this.state.dataNumber][
                      "goals-target__hint"
                    ]
                  }
                </span>
                <a href="goals" className="goals-target__edit text-semiRed">
                  Edit goal
                </a>
              </section>
              <section className="goals-target__streak w-75 m-auto text-center">
                <p className="small mb-2">
                  {
                    progression_data[this.state.dataNumber][
                      "goals-target__streak_top"
                    ]
                  }
                </p>
                <p className="text-secondary small mb-0">
                  {
                    progression_data[this.state.dataNumber][
                      "goals-target__streak_bottom"
                    ]
                  }
                </p>
              </section>
              <section className="progress-graph--container px-2 border-top border-secondary-200">
                <h6 className="fs-sm mt-2">
                  {
                    progression_data[this.state.dataNumber][
                      "progress-graph__head"
                    ]
                  }
                </h6>
                <div className="progress-graph">

                    <ProgressionGraph />



                </div>
              </section>
            </main>
</Suspense>
            
          </section>
        </main>
        <footer className="text-center border-top border-secondary-200 py-2 small">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-semiRed"
          >
            karma goals and setting
          </a>
        </footer>
      </section>
    );
  }
}
export default TaskProgression;
