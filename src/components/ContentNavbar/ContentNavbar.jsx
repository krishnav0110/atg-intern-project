import "./ContentNavbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

import arrowDownImg from "../../assets/arrow-down.svg";
import groupJoinIcon from "../../assets/group.svg";
import groupLeaveIcon from "../../assets/group-leave.svg";
import writePostLogo from "../../assets/write-post.svg";



export default function ContentNavbar() {
  const { user } = useContext(Context);

  return (
    <div className="top-bar">
      <div className="top-bar-links">
        <div className="top-bar-link active">All Posts(32)</div>
        <div className="top-bar-link">Article</div>
        <div className="top-bar-link">Event</div>
        <div className="top-bar-link">Education</div>
        <div className="top-bar-link">Job</div>
      </div>

      <div className="action-btn-con">
        <button className="action-btn action-write-post-btn">
          <div className="action-write-post-btn-text">Write a Post</div>
          <picture>
            <source media="(min-width:990px)" srcSet={arrowDownImg} />
            <source media="(min-width:0px)" srcSet={writePostLogo} />
            <img src="" alt="arrow-down" className="action-write-post-btn-img" loading="lazy" />
          </picture>
        </button>
        {!user ?
          <Link to="/signup"><button className="action-btn action-join-group-btn">
            <img src={groupJoinIcon} alt="group-img" className="action-group-btn-img" loading="lazy" />
            <div>Join Group</div>
          </button></Link> :
          <button className="action-btn action-leave-group-btn">
            <img src={groupLeaveIcon} alt="group-img" className="action-group-btn-img" loading="lazy" />
            <div>Leave Group</div>
          </button>
        }
      </div>

      <div className="mobile-top-bar-links">
        <div>Filter: All</div>
        <img src={arrowDownImg} alt="arrow-down" className="mobile-filter-btn-img" />
      </div>
    </div>
  );
}