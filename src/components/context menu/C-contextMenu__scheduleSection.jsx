import {
  Component,
  TodayIcon,
  CgCalendarNext,
  CgMore,
  BsBrightnessHigh,
  RiFlag2Fill,
} from "../../utils/modules";
class ScheduleSection extends Component {
    render() { 
        return (
          <>
            <div className=" d-flex flex-column gap-3 w-100 text-light py-1 px-2 scheduleSection">
              <div>
                <sup>Schedule</sup>
                <ul className="list-unstyled d-flex gap-3">
                  <li className="">
                    <button
                      className="  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <TodayIcon size="24px" className="w-100 h-100" />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <BsBrightnessHigh
                        color="#ff9a14"
                        className="w-100 h-100 rotate-x-slow"
                      />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <CgCalendarNext color="#a970ff" className="w-100 h-100" />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <CgMore
                        color="hsla(0,0%,100%,.56)"
                        className="w-100 h-100"
                      />
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <sup>Priority</sup>
                <ul className="list-unstyled d-flex gap-3">
                  <li className="">
                    <button
                      className="outline-1-on-hover bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <RiFlag2Fill
                        color="#de4c4a"
                        size="24px"
                        className="w-100 h-100"
                      />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="outline-1-on-hover bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <RiFlag2Fill color="#f49c18" className="w-100 h-100" />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className=" outline-1-on-hover  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <RiFlag2Fill color="#4073d6" className="w-100 h-100" />
                    </button>
                  </li>
                  <li className="">
                    <button
                      className=" outline-1-on-hover  bg-transparent border-0  p-0"
                      style={{ widht: "24px", height: "24px" }}
                    >
                      <RiFlag2Fill color="#7e7e7e" className="w-100 h-100" />
                    </button>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </>
        );
    }
}
 
export default ScheduleSection;