import { Component } from "../../utils/modules";
class ShareIcon extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          data-svgs-path="sm1/add_member.svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              stroke="currentColor"
              d="M12 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM4.5 18.3v.1c0 .6.8 1.1 1.8 1.1h11.4c1 0 1.8-.5 1.8-1v-.3c0-2.5-3.3-4.7-7.5-4.7s-7.5 2.2-7.5 4.8z"
            ></path>
            <path
              fill="currentColor"
              d="M21 11v2a.5.5 0 1 1-1 0v-2h-2a.5.5 0 1 1 0-1h2V8a.5.5 0 1 1 1 0v2h2a.5.5 0 1 1 0 1h-2z"
            ></path>
          </g>
        </svg>
      </>
    );
  }
}

export default ShareIcon;
