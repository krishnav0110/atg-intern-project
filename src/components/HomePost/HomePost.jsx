import "./HomePost.css";
import { useState } from "react";

import shareIcon from "../../assets/share.svg";
import dateLogo from "../../assets/post-date-logo.svg";
import jobLogo from "../../assets/post-job-logo.svg";
import locationLogo from "../../assets/locationLogo.svg";
import eyeIcon from "../../assets/eye.svg";
import moreDetailsIcon from "../../assets/more-details.svg";

export default function HomePost({post}) {
  const [optionsDropDown, setOptionsDropDown] = useState(false);

  const getPostTypeEmoji = (postType) => {
    if(postType == "Article") {
      return "✍️";
    } else if(postType == "Education") {
      return "🔬️";
    } else if(postType == "Meetup") {
      return "🗓️";
    } else if(postType == "Job") {
      return "💼️";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="post-con">
        {post.img ? <img src={post.img} alt="post-img" className="post-img" loading="lazy" /> : <></>}
        <div className="post-content">
          <div className="post-type">{getPostTypeEmoji(post.type) + post.type}</div>
          <div className="post-title-con">
            <div className="post-title">{post.title}</div>

            <div className="post-details-btn" onMouseLeave={() => setOptionsDropDown(false)}>
              <img src={moreDetailsIcon} alt="more-details" className="post-more-details-img" 
                onClick={() => setOptionsDropDown(true)}
                style={{backgroundColor: optionsDropDown ? "#ccc" : "white"}}
              />
              <div className="post-details-list" style={{maxHeight: optionsDropDown ? "150px" : "0"}}>
                <div className="post-details-list-item">Edit</div>
                <div className="post-details-list-item">Report</div>
                <div className="post-details-list-item">Option 3</div>
              </div>
            </div>
          </div>

          {post.desc ? 
            <div className="post-desc">{post.desc}</div> :
            <div className="post-desc-details">
              {post.date ?
                <div className="post-desc-col col-1">
                  <img src={dateLogo} alt="date" loading="lazy" className="post-desc-logo" />
                  <div>{post.date}</div>
                </div> :
                <div className="post-desc-col col-1">
                  <img src={jobLogo} alt="date" loading="lazy" className="post-desc-logo" />
                  <div>{post.organization}</div>
                </div>
              }
              <div className="post-desc-col col-2">
                <img src={locationLogo} alt="date" loading="lazy" className="post-desc-logo" />
                <div>{post.location}</div>
              </div>
            </div>
          }

          {post.date ? <div className="post-further-link date">Visit Website</div> : <></> }
          {post.organization ? <div className="post-further-link organization">Apply on Timesjobs</div> : <></> }

          <div className="post-bottom">
            <div className="post-user-details">
              <img src={post.userPic} alt="profile-pic" className="post-user-img" loading="lazy" />
              <div className="post-user-name">{post.username}</div>
            </div>
            <div className="post-details">
              <img src={eyeIcon} alt="views-icon" className="views-icon-img" loading="lazy" />
              <div className="post-views">{post.views / 1000}k views</div>
              <div className="post-share-btn">
                <img src={shareIcon} alt="share-btn" className="post-share-img" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}