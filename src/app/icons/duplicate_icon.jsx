import { Component } from "../../utils/modules";
class DuplicateIcon extends Component {
  render() {
    return (
      <>
        <svg width="24" height="24" data-svgs-path="sm1/duplicate.svg">
          <g fill="none">
            <path
              fill="currentColor"
              d="M11 13h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H11v2.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V14H7.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5H10v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V13z"
            ></path>
            <rect
              width="12"
              height="12"
              x="4.5"
              y="7.5"
              stroke="currentColor"
              rx="2"
            ></rect>
            <path
              fill="currentColor"
              d="M19 16.7V6a1 1 0 00-1-1H7.3c.2-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3h7.8c1 0 1.3 0 1.6.3.3.1.6.4.7.7.2.3.3.7.3 1.6v7.8c0 1 0 1.3-.3 1.6-.1.3-.4.5-.7.7zm-1.6.3H9.6h7.8z"
            ></path>
          </g>
        </svg>
      </>
    );
  }
}

export default DuplicateIcon;
