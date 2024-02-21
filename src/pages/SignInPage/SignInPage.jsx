import "./SignInPage.scss";

function SignInPage() {
  return (
    <div className="main">
      <div className="main__wrap">
        <h1 className="main__header">DATING WRAPPED</h1>
        <p className="main__description">
          Don't have an account?{" "}
          <span className="main__description-register">Register here</span>
        </p>
      </div>

      <form className="login-form">
        <h2 className="login-form__header">SIGN IN</h2>
        <div className="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          <label className="login-form__label" for="username">
            Username
          </label>
        </div>
        <div className="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autocomplete="off"
            className="form-control-material"
            required
          />
          <label className="login-form__label" for="password">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-ghost">
          SIGN IN
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
