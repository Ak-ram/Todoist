import { Component } from "../../utils/modules";
class EditIcon extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          data-svgs-path="sm1/edit.svg"
          className={this.props.classes}
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="currentColor"
              d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"
            ></path>
            <path
              stroke="currentColor"
              d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"
            ></path>
          </g>
        </svg>
        
      </>
    );
  }
}

export default EditIcon;
