import {Component} from '../../utils/modules'
class TodayIcon extends Component {
    render() { 
        return (
          <>
            <svg
              width={this.props.size}
              height={this.props.size}
              viewBox="0 0 24 24"
            >
              <g fill="#25b84c" fillRule="evenodd">
                <path
                  fillRule="nonzero"
                  d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                  opacity=".1"
                ></path>
                <path
                  fillRule="nonzero"
                  d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                ></path>
                <text
                  fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                  fontSize="9"
                  transform="translate(4 2)"
                  fontWeight="500"
                >
                  <tspan x="8" y="15" textAnchor="middle">
                    {new Date().toLocaleString("En", { day: "2-digit" })}
                  </tspan>
                </text>
              </g>
            </svg>
          </>
        );
    }
}
 
export default TodayIcon;