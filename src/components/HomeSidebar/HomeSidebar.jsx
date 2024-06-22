import "./HomeSidebar.css";
import { useState } from "react";
import SidebarGroup from "./SidebarGroup";

import exclaimImg from "../../assets/exclaim.svg";
import locationLogo from "../../assets/locationLogo.svg";
import editPenImg from "../../assets/edit-pen.svg";
import crossImg from "../../assets/cross.svg";
import thumbsUpImg from "../../assets/thumbs-up.svg";

import group1Img from "../../backendData/group1-img.png";
import group2Img from "../../backendData/group2-img.png";
import group3Img from "../../backendData/group3-img.png";
import group4Img from "../../backendData/group4-img.png";

export default function HomeSidebar() {
  const [location, setLocation] = useState("Noida, India");

  const groups = [
    {name: "Leisure",    pic: group1Img},
    {name: "Activism",   pic: group2Img},
    {name: "MBA",        pic: group3Img},
    {name: "Philosophy", pic: group4Img},
  ];

  return (
    <div className="side-bar-con">
      <div className="location-input-con">
        <img src={locationLogo} alt="location-img" className="location-input-img" loading="lazy" />
        <input className="location-input" type="text" placeHolder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />
        {location == "" ?
          <img src={crossImg} alt="cross-img" className="location-cross-img" loading="lazy" /> :
          <img src={editPenImg} alt="edit-pen-img" className="location-cross-img" onClick={() => setLocation("")} loading="lazy" />
        }
      </div>
      <div className="location-info">
        <img src={exclaimImg} alt="location-info-img" className="location-info-img" loading="lazy" />
        <div className="location-info-text">Your location will help us serve better and extend a personalised experience.</div>
      </div>

      <div className="groups-con">
        <div className="groups-title-con">
          <img src={thumbsUpImg} alt="thumbs-up" className="groups-title-img" loading="lazy" />
          <div className="groups-title-text">RECOMMENDED GROUPS</div>
        </div>
        <div className="groups">
          {groups.map(group => {
            return <SidebarGroup group={group} />
          })}
        </div>
        <div className="group-more-link">See More...</div>
      </div>
    </div>
  );
}