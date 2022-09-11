import { Component, passwordValidation } from "../../utils/modules";
import {passwordShow,passwordHide,passwordValidate} from '../../utils/functions.js'
class PasswrodValidationBox extends Component { 

  render() {
    return (
      <>
        <label htmlFor="password" className="position-relative col-12 p-0 my-2 ">
          <small className="fw-bold d-block">Password</small>
          <input
            type="password"
            id="password"
            name="password"
            data-name="password-field"
            className="w-100 form-control shadow-none"
            validate="true"
            onChange={passwordValidate}
            onFocus={passwordShow}
            onBlur={passwordHide}
          />
        </label>
        <div className="passwordConditionsBox shadow-lg position-relative border d-flex rounded fs-sm p-2 my-1 d-none">
          <div className="row">
            <div className="mask"></div>
            <h6 className="fs-sm col-12 mb-1">
              Password should contains at least:{" "}
            </h6>
            {passwordValidation.map((validate) => {
              return (
                <label
                  key={validate["id"]}
                  htmlFor={validate["id"]}
                  className="col-12 mb-1 d-flex align-items-center"
                >
                  <input
                    data-class="form-checkbox"
                    data-type="pass-checkbox"
                    type="checkbox"
                    id={validate["id"]}
                    className="mx-2"
                  />
                  <pre
                    className="d-inline-block m-0"
                    data-name="checkbox-password-label"
                  >
                    {validate["condition"]}
                  </pre>
                </label>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default PasswrodValidationBox;
