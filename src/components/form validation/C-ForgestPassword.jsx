import { Component } from "../../utils/modules";
class ForgetPasswrod extends Component {
  render() {
    return (
      <>
        <div className="forgetPassword fs-sm">
          <label className="d-flex align-items-center gap-2">
            <input type="checkbox" name="keep me loggin" id="keepLogging" />
            <span htmlFor="keeplogging">Keep me logged in</span>
          </label>
          <p className="my-3">
            <a href="#3">Forgot your password?</a>
          </p>
        </div>
      </>
    );
  }
}

export default ForgetPasswrod;
