import "./Home.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

import Navbar from "../../components/Navbar/Navbar";
import ContentNavbar from "../../components/ContentNavbar/ContentNavbar";
import HomePosts from "../../components/HomePosts/HomePosts";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";

import bgImage from "../../assets/bg.png";



export default function Home() {
  const { user } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="bg-img-con">
        <img src={bgImage} alt="bg-image" className="bg-img" loading="lazy" />
        <div className="bg-img-text">
          <div className="bg-img-title">Computer Engineering</div>
          <div className="bg-img-subtitle">142,765 Computer Engineers follow this</div>
        </div>
      </div>

      <div className="content-con">
        <ContentNavbar />

        <div className="main-content">
          <div className="posts-con">
            <HomePosts />
          </div>
          <div className="sidebar">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </>
  );
}