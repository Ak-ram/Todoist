import { Component } from "../../utils/modules";
class PrivacyHint extends Component {
  render() {
    return (
      <>
        <div className="privacy">
          <p className="fs-sm text-secondary">
            By continuing with Google, Apple, or Email, you agree to Todoist's
            Terms of Service and Privacy Policy
            <a href="#3" className="text-danger small">
              {" "}
              Terms of Service
            </a>{" "}
            and
            <a href="#3" className="text-danger small">
              {" "}
              Privacy Policy
            </a>
            .
          </p>
        </div>{" "}
      </>
    );
  }
}

export default PrivacyHint;
