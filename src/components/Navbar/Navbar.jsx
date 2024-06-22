import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import backArrowIcon from "../../assets/back-arrow.svg";



export default function Navbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({type: "LOGOUT"});
  }

  return (
    <>      
      <div className="navbar-con">
        <Link to="/">
          <picture>
            <source media="(min-width:990px)" srcSet={logo} />
            <source media="(min-width:0px)" srcSet={backArrowIcon} />
            <img src="" alt="logo" className="navbar-logo" loading="lazy" />
          </picture>
        </Link>
        <div className="nav-search-bar">
          <img src={searchIcon} alt="icon" className="nav-search-logo" loading="lazy" />
          <input className="nav-search-input" type="text" placeholder="Search for your favorite groups in ATG" />
        </div>
        {user ? (
          <div className="navbar-login" onClick={handleLogout}>
            <img src={user.pic} alt="user-pic" className="nav-user-pic" loading="lazy" />
            <div className="nav-user-name">{user.username}</div>
            <img src={arrowDownIcon} alt="arrow-down" className="nav-login" loading="lazy" />
          </div>
        ) : (
          <Link to="/signup"><div className="navbar-login">
            <div className="nav-login">Create account.</div>
            <div className="nav-login">It's free!</div>
            <img src={arrowDownIcon} alt="arrow-down" className="nav-login" loading="lazy" />
          </div></Link>
        )}
        
      </div>
    </>
  );
}


