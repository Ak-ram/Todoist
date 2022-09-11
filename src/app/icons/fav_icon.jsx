import { Component } from "../../utils/modules";
class FavIcon extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          data-svgs-path="sm1/heart.svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M12 18.345c5.642-4.767 6.354-5.448 7.099-6.988a3.79 3.79 0 0 0 .401-1.69c0-2.307-1.772-4.167-3.944-4.167-1.252 0-2.407.62-3.15 1.657L12 7.725l-.407-.568C10.851 6.12 9.696 5.5 8.444 5.5 6.272 5.5 4.5 7.36 4.5 9.667c0 .582.13 1.13.401 1.69.745 1.54 1.457 2.221 7.099 6.988z"
          ></path>
        </svg>
      </>
    );
  }
}

export default FavIcon;
