import {
  Component,
  Brand,
  signupOptions,
  CgSpinner,
  EmailValidationBox,
  PasswordValidationBox,
  PrivacyHint,
  ForgetPasswrod,
} from "../../utils/modules";
import "./_regester.sass";
class Regester extends Component {
  state = {};
  // for both sign up and log in pages
  componentDidMount() {
    if (window.location.pathname.toString().includes("log")) {
      this.setState({
        pageName: "Log In",
        password: <PasswordValidationBox />,
        haveAccount: "Dont have Account ?",
        swapping_footer_link: "sign up",
        hint: <ForgetPasswrod />,
        todoist_support: "Todoist Support",
      });
    } else if (window.location.pathname.toString().includes("sign")) {
      this.setState({
        pageName: "Sign Up",
        haveAccount: "Already have Account ?",
        swapping_footer_link: "log in",
        hint: <PrivacyHint />,
      });
    }
  }

  // add spinner to submit btn on submitting the form
  showSpinner = () => {
    let spinner = document.querySelector(".ImSpinner11");
    spinner.style.setProperty("display", "block", "important");
  };
  render() {
    return (
      <>
        <section className="stand__alone--page">
          <div className="container">
            <div className="row">
              <div className="stand__alone__signUp  shadow-lg border rounded p-3 my-5 mx-auto">
                <div className="stand__alone__signUp--logo">
                  <Brand />
                </div>

                <div className="stand__alone__signUp--options">
                  <h2 className="h2 m-3 fw-bold">{this.state.pageName}</h2>

                  {signupOptions.map((option) => {
                    return (
                      <>
                        <button
                          key={option["option-name"]}
                          className={`${option["option-name"]}-option d-block bg-light w-75 border p-1 my-2 mx-auto`}
                        >
                          <a
                            href="./app"
                            className="link-hover-none d-flex align-items-center justify-content-center"
                          >
                            {option["option-icon"]}{" "}
                            <span className="mx-2 h-6 fs-sm fw-lighter">
                              continue with {option["option-name"]}
                            </span>
                          </a>
                        </button>
                      </>
                    );
                  })}

                  <div className="OR-divider">OR</div>
                  <form action="" method="GET">
                    <div className="row w-75 mx-auto">
                      <EmailValidationBox />
                      {this.state.password}
                      <button
                        onSubmit={this.showSpinner}
                        type="submit"
                        data-type="submit"
                        className="btn btn-semiRed fs-sm text-light fw-bold text-capitalize border col-12 d-flex align-items-center justify-content-center gap-2 shadow-none"
                        disabled
                      >
                        <span>{this.state.pageName}</span>
                        <CgSpinner
                          size="18px"
                          className="rotate ImSpinner11 d-none"
                        />
                      </button>
                    </div>
                  </form>
                </div>
                <footer className="w-75 my-3 mx-auto">
                  <div className="policy border-bottom">
                    <p>{this.state.hint}</p>
                  </div>
                  <div className="window-to-logIn mt-4">
                    <p className="text-center text-secondary fs-sm">
                      {this.state.haveAccount}{" "}
                      <a
                        href={this.state.swapping_footer_link}
                        className="text-danger small"
                      >
                        {this.state.swapping_footer_link}
                      </a>
                    </p>

                    <a href="%d" className="text-center small d-block">
                      {this.state.todoist_support}
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Regester;
