import {
  Component,
  emailValidation,
  HiOutlineShieldCheck,
} from "../../utils/modules";
import { emailValidate, emailShow, emailHide } from "../../utils/functions.js";
class EmailValidationBox extends Component {
  render() {
    return (
      <>
        <label htmlFor="email" className="position-relative col-12 p-0 my-2">
          <small className="fw-bold d-block">Email</small>
          <input
            type="email"
            id="email"
            name="email"
            data-name="email-field"
            className="w-100 form-control shadow-none pe-5"
            validate="true"
            onChange={emailValidate}
            onFocus={emailShow}
            onBlur={emailHide}
          />
          <HiOutlineShieldCheck
            size="20"
            color="green"
            className="position-absolute top-50 end-0 me-3 d-none password-truthy-checker"
          />
        </label>
        <div className="emailConditionsBox shadow-lg position-relative border d-flex rounded fs-sm p-2 my-1 d-none">
          <div className="row">
            <div className="mask"></div>
            <h6 className="fs-sm col-12 mb-1">Email should contains: </h6>
            {emailValidation.map((validate) => {
              return (
                <label
                  key={validate["id"]}
                  htmlFor={validate["id"]}
                  className="col-12 mb-1 d-flex align-items-center"
                >
                  <input
                    data-class="form-checkbox"
                    type="checkbox"
                    id={validate["id"]}
                    className="mx-2"
                  />

                  <pre
                    className="d-inline-block m-0"
                    data-name="checkbox-email-label"
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
export default EmailValidationBox;
