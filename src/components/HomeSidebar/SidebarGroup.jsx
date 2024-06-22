import "./SidebarGroup.css";
import { useState } from "react";

export default function SidebarGroup({group}) {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="group">
      <div className="group-details">
        <img src={group.pic} alt="group-img" className="group-img" loading="lazy" />
        <div className="group-name">{group.name}</div>
      </div>
      {!followed ?
        <button className="group-follow-btn" onClick={() => setFollowed(true)}>Follow</button> :
        <button className="group-followed-btn">Followed</button>
      }
    </div>
  );
}