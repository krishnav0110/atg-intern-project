import "./Signup.css";

import { useContext } from "react";
import { Context } from "../../context/Context";

import loginImg from "../../assets/login-img.svg";
import fbLogo from "../../assets/fb-logo.png";
import crossImg from "../../assets/cross.svg";

import userImg from "../../backendData/siddharth-img.png";

export default function Signup({setLoginShowState, setSignupShowState}) {
  const { user, dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      _id: "1",
      username: "Siddharth Goyal",
      pic: userImg,
    };
    dispatch({type: "LOGIN_START"});
    dispatch({type: "LOGIN_SUCCESS", payload: userData});
  };

  return (
    <>
      <div className="signup-bg-con">
        <div className="signup-con">
          <img onClick={() => {setLoginShowState(false); setSignupShowState(false)}}
            src={crossImg}
            alt="cancel-btn"
            className="cancel-btn-img"
            loading="lazy"
          />
          <div className="signup-main-con">
            <div className="signup-info">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
            <div className="div-4">
              <form className="signup-form">
                <div className="signup-header">Create Account</div>
                <div className="input-name-con">
                  <input className="input-details" type="text" placeholder="First Name" />
                  <input className="input-details" type="text" placeholder="Last Name" />
                </div>
                <input className="input-details" type="email" placeholder="Email" />
                <input className="input-details" type="password" placeholder="Password" />
                <input className="input-details" type="password" placeholder="Confirm Password" />

                <button className="create-account-btn" onClick={handleSubmit}>Create Account</button>

                <button className="sign-third-party" onClick={handleSubmit}>
                  <img src={fbLogo} alt="facebook-logo" className="third-party-logo" loading="lazy" />
                  <div className="sign-third-party-text">Sign up with Facebook</div>
                </button>
                <button className="sign-third-party" onClick={handleSubmit}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86d06174cde38549efaef5aced10747d9da2006a22c6c31e7dbcd1acfb35d52?"
                    alt="google-logo" className="third-party-logo" loading="lazy"
                  />
                  <div className="sign-third-party-text">Sign up with Google</div>
                </button>
              </form>
              <div className="signup-side-con">
                <div className="signup-side-header">
                  Already have an account?{" "}
                  <span 
                    style={{fontWeight: 400, color: "#2f6ce5", cursor: "pointer"}}
                    onClick={() => {setLoginShowState(true); setSignupShowState(false)}}
                  >
                    Sign In
                  </span>
                </div>
                <img src={loginImg} alt="signup-side-img" className="signup-side-img" loading="lazy" />
                <div className="signup-side-policy">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
