import {Component} from '../../utils/modules'
class Tooltip extends Component {
    render() { 
        return (
          <div
            className="hint d-none bg-black smooth-fast cursor-default shake-y fs-sm py-1 w-auto position-absolute text-light z-100"
          ></div>
        );
    }
}
 
export default Tooltip;