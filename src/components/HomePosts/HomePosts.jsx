import "./HomePosts.css";
import HomePost from "../HomePost/HomePost";

import post1Img from "../../backendData/post1.png";
import post2Img from "../../backendData/post2.png";
import post3Img from "../../backendData/post3.png";

import sarthakImg from "../../backendData/sarthak-img.png";
import sarahImg from "../../backendData/sarah-img.png";
import ronalImg from "../../backendData/ronal-img.png";
import josephImg from "../../backendData/joseph-img.png";

export default function HomePosts() {
  const posts = [
    {
      type: "Article",
      img: post1Img,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      username: "Sarthak Kamra",
      userPic: sarthakImg,
      views: 1400,
    },
    {
      type: "Education",
      img: post2Img,
      title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      username: "Sarah West",
      userPic: sarahImg,
      views: 1400,
    },
    {
      type: "Meetup",
      img: post3Img,
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      date: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      username: "Ronal Jones",
      userPic: ronalImg,
      views: 1400,
    },
    {
      type: "Job",
      title: "Software Developer",
      organization: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      username: "Joseph Gray",
      userPic: josephImg,
      views: 1400,
    }
  ];

  return (
    <div className="posts">
      {posts.map(post => {
        return <HomePost post={post} />
      })}
    </div>
  );
}