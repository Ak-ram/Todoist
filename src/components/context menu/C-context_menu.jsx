import { Component } from "../../utils/modules";
import "./context_menu.sass";
class ContextMenu extends Component {
  render() {
    return (
      <div
        className="contextMenu p-0 z-111 d-none position-absolute"
        data-id={this.props.id}
        data-close='close-from-outside'
      >
        <ul className="list-unstyled p-0 m-0 d-flex flex-column rounded py-2  bg-darkApp-navbar shadow">
          {this.props.contextData[`${Object.keys(this.props.contextData)}`].map(
            (item) => {
              return (
                <li
                  key={item.label}
                  className="w-100 hover-gray fs-sm smooth-fast"
                >
                  <button
                    onClick={() => item.action} // work as a reference which prevent function from immediately working >>solve this error => onClick should be function not  string
                    className="d-flex align-items-center justify-content-between gap-2 py-1 w-100 bg-transparent border-0 text-light text-start px-2 "
                  >
                    <div className="d-flex align-items-baseline gap-2">
                      <span
                        className="item-icon"
                        style={{ color: "rgb(138, 138, 138)" }}
                      >
                        {item.icon}
                      </span>
                      <span className="item-label">
                        {item.label} <span className='fw-bold text-danger'>{item.newFeature}</span>
                      </span>
                    </div>
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}

export default ContextMenu;
