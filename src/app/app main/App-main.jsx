import {
  Component,
  MainInboxState,
  MainTodayState,
  MainUpcomingState,
  VscClose,
} from "../../utils/modules";

import { deletionConfirmationMsg } from "../../utils/functions";
class AppMain extends Component {
  state = {
    currentState: <MainTodayState />,
  };

  render() {
    return (
      <>
        <main
          data-name="App-main"
          className="p-0 status col bg-darkApp-body text-light position-relative h-100 overflow-auto todoist-scrollbar"
        >
          {window.location.pathname.includes("inbox") ? (
            <div className="container p-0">
              <div className="row position-relative m-auto">
                <MainInboxState />
            
              </div>
            </div>
          ) : window.location.pathname.includes("today") ? (
            <div className="container p-0">
              <div className="row position-relative m-auto">
                <MainTodayState />

              </div>
            </div>
          ) : (
            <div className="container p-0">
              <div className="row position-relative m-auto">
                <MainUpcomingState />
              </div>
            </div>
          )}
          <div className="deletion-confirmation-msg d-none translate-middle position-absolute shadow-sm bottom-0 start-50 p-2 bg-darkApp-navbar rounded-3 fs-sm d-flex justify-content-between align-items-center w-50">
            <span>1 tasks completed</span>
            <span className="d-flex align-items-center">
              <span className="fw-bold text-semiRed py-1 px-2 rounded hover-semiRed-faded cursor-pointer">
                Undo
              </span>
              <span
                className=" mx-2 hover-semiRed-faded cursor-pointer rounded"
                style={{ padding: "0 2px 2px " }}
                onClick={deletionConfirmationMsg}
              >
                <VscClose size="16" />
              </span>
            </span>
          </div>
        </main>
      </>
    );
  }
}

export default AppMain;
