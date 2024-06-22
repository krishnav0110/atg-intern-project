import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

import loginImg from "../../assets/login-img.svg";
import fbLogo from "../../assets/fb-logo.png";
import crossImg from "../../assets/cross.svg";

import userImg from "../../backendData/siddharth-img.png";

export default function Login() {
  const { dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      _id: "1",
      username: "Siddharth Goyal",
      pic: userImg,
    };
    dispatch({type: "LOGIN_START"});
    dispatch({type: "LOGIN_SUCCESS", payload: userData});
    window.location.replace("/");
  };

  return (
    <>
      <div className="login-bg-con">
        <div className="login-con">
          <Link to="/" className="cancel-btn-img-con"><img
            src={crossImg}
            alt="cancel-btn"
            className="cancel-btn-img"
            loading="lazy"
          /></Link>
          <div className="login-main-con">
            <div className="login-info">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
            <div className="div-4">
              <form className="login-form">
                <div className="login-header">Sign In</div>
                <input className="input-details" type="email" placeholder="Email" />
                <input className="input-details" type="password" placeholder="Password" />

                <div className="create-account-btn-con">
                  <button className="create-account-btn" onClick={handleSubmit}>Sign In</button>
                  <Link to="/signup"><div className="mobile-login-link">or, Create Account</div></Link>
                </div>

                <button className="sign-third-party" onClick={handleSubmit}>
                  <img src={fbLogo} alt="facebook-logo" className="third-party-logo" loading="lazy" />
                  <div className="sign-third-party-text">Sign in with Facebook</div>
                </button>
                <button className="sign-third-party" onClick={handleSubmit}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86d06174cde38549efaef5aced10747d9da2006a22c6c31e7dbcd1acfb35d52?"
                    alt="google-logo" className="third-party-logo" loading="lazy"
                  />
                  <div className="sign-third-party-text">Sign in with Google</div>
                </button>
                <div className="login-forget-password">Forget Password?</div>
              </form>
              <div className="login-side-con">
                <div className="login-side-header">
                  Don't have an account yet?{" "}
                  <Link to="/signup"><span
                    style={{fontWeight: 600, color: "#2f6ce5", cursor: "pointer"}}
                  >
                    Create new for free!
                  </span></Link>
                </div>
                <img src={loginImg} alt="login-side-img" className="login-side-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
