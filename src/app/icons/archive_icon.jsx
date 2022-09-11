import { Component } from "../../utils/modules";
class ArchiveIcon extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          data-svgs-path="sm1/archive.svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              stroke="currentColor"
              d="M5.5 9.5V18A1.5 1.5 0 0 0 7 19.5h10a1.5 1.5 0 0 0 1.5-1.5V9.5h-13zm-1 0h15V7A1.5 1.5 0 0 0 18 5.5H6A1.5 1.5 0 0 0 4.5 7v2.5z"
            ></path>
            <rect
              width="6"
              height="1"
              x="9"
              y="12"
              fill="currentColor"
              rx=".5"
            ></rect>
          </g>
        </svg>
      </>
    );
  }
}

export default ArchiveIcon;
