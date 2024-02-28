import "./SignInPage.scss";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="main">
      <div className="main__wrap">
        <h1 className="main__header">DATING WRAPPED</h1>
        <p className="main__description">
          The site where you can{" "}
          <span className="main__description-register">
            analyze your dating data!
          </span>
        </p>
      </div>

      <form className="login-form">
        <h2 className="login-form__header">SIGN IN</h2>
        <div className="form-input-material">
          <label className="login-form__label" for="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          {/* <label className="login-form__label" for="username">
            Username
          </label> */}
        </div>
        <div className="form-input-material">
          <label className="login-form__label" for="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          {/* <label className="login-form__label" for="password">
            Password
          </label> */}
        </div>
        <Link to={`/`}>
          <button type="submit" className="btn btn-primary btn-ghost">
            SIGN IN
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignInPage;
