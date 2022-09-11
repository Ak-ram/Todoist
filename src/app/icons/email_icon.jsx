import { Component } from "../../utils/modules";
class EmailIcon extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          data-svgs-path="sm1/mail.svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M12 11.4l4.7-3.8a.5.5 0 1 1 .6.8L12 12.6 6.7 8.4a.5.5 0 0 1 .6-.8l4.7 3.8z"
            ></path>
            <rect
              width="15"
              height="13"
              x="4.5"
              y="5.5"
              stroke="currentColor"
              rx="2"
            ></rect>
          </g>
        </svg>
      </>
    );
  }
}

export default EmailIcon;
