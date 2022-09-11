import {Component} from '../../utils/modules';
import "./Checkbox.sass"
import {checkboxChecked} from '../../utils/functions.js'
class CheckboxAnimated extends Component {
    
    render() { 
        return (
          <>
            <div className="cursor-pointer" style={{ minWidth: "20px" }}>
              <div className="checkbox" onClick={checkboxChecked}></div>
            </div>
            <span className="pointer-events-none" onClick={checkboxChecked}>
              Add to favorites
            </span>
          </>
        );
    }
}
 
export default CheckboxAnimated;