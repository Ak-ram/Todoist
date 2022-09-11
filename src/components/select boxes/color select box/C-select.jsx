import { Component, GoPrimitiveDot } from "../../../utils/modules";
import "./Select.sass";
class Select extends Component {
  state = {
    select_options: [
      { hexColor: "#b8255f", colorName: "Berry Red" },
      { hexColor: "#db4035", colorName: "Red" },
      { hexColor: "#ff9933", colorName: "Orange" },
      { hexColor: "#fad000", colorName: "Yellow" },
      { hexColor: "#afb83b", colorName: "Olive Green" },
      { hexColor: "#7ecc49", colorName: "Lime Green" },
      { hexColor: "#299438", colorName: "Green" },
      { hexColor: "#6accbc", colorName: "Mint Green" },
      { hexColor: "#158fad", colorName: "Teal" },
      { hexColor: "#14aaf5", colorName: "Sky Blue" },
      { hexColor: "#96c3eb", colorName: "Light Blue" },
      { hexColor: "#4073ff", colorName: "Blue" },
      { hexColor: "#884dff", colorName: "Grape" },
      { hexColor: "#af38eb", colorName: "Violet" },
      { hexColor: "#eb96eb", colorName: "Lavender" },
      { hexColor: "#e05194", colorName: "Magenta" },
      { hexColor: "#ff8d85", colorName: "Salmon" },
      { hexColor: "#808080", colorName: "Charcoal" },
      { hexColor: "#b8b8b8", colorName: "Gray" },
      { hexColor: "#ccac93", colorName: "Taupe" },
    ],
  };
  switchingOptions = (e) => {
    const selectHead = e.target;
    selectHead.nextSibling.classList.toggle("d-none");
    console.log(e.target);
  };
  SelectedOption = (e) => {
    e.target.parentNode.parentNode.previousSibling.innerHTML =
      e.target.innerHTML;
    e.target.parentNode.parentNode.classList.toggle("d-none");
    console.log(e.target.parentNode.parentNode);
  };
  render() {
    return (
      <>
        <section className="position-relative select w-100 fs-sm">
          <header
            className="select__selected d-flex align-items-center gap-1 cursor-pointer bg-darkApp-body rounded-2 px-3 py-1"
            onClick={this.switchingOptions}
          >
            <GoPrimitiveDot
              color={this.state.select_options[17].hexColor}
              size="25"
            />
            {this.state.select_options[17].colorName}
          </header>
          <footer className="select__footer position-absolute w-100 z-4 rounded px-3 py-1 mt-2 bg-darkApp-body d-none">
            <ul className="select__options m-0  list-unstyled ">
              {this.state.select_options.map((color,i) => {
                return (
                  <li
                  key={`unique-${color}-${i}`}
                    className={`option my-1 cursor-pointer ${color} hover-gray smooth-fast `}
                    onClick={this.SelectedOption}
                  >
                    <GoPrimitiveDot color={color.hexColor} size="25" />
                    {color.colorName}
                  </li>
                );
              })}
            </ul>
          </footer>
        </section>
      </>
    );
  }
}

export default Select;
