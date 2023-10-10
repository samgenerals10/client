import React from "react";
import "./Profile.css";
import { IoLogoFacebook } from "react-icons/io";
import { GrGooglePlus } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import Typical from "react-typical";
import react, { useState } from "react";
import myImage from '../../../assets/Home/IMG-20230222-WA0029.jpg';

export default function Profile() {
  const profileContainer = {
    display: 'flex',
    alignItems: 'center',
    textAign: 'center',
    justifyContent: 'center',
    height: '10%',
    minHeight: 'fitContent',
  };

  const profileParent = {
    display: 'flex',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins, sans-serif',
    marginTop: 70,

    // Change text color to red
    // Set background color to yellow
    // Add any other styles you need
  };

  const colzIcon = {
    color: 'white',
    padding: '0px',
    margin: 3,
    paddingLeft: '0px',
  };


// Icons Hover Setup
const colzIconHover={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  color: 'white'
};

const colzconHoverFacebook={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  
};

const colzconHoverInstagram={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  
};

const colzconHoverTwitter={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  
};

const colzconHoverGoogle={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  
};

const colzconHoverYoutube={
  padding: '0px',
  margin: 3,
  paddingLeft: '0px',
  fontSize: '40px',
  
};

  //  const ['iconfb,iconIn,iconIns,iconTw,iconGo,iconYt'] ={
  //   color: 'white',
  //  }

  const typicalH1 = {
    fontFamily: 'Anton, sans-serif',
    margin: '10px 0 0 0',
    fontSize: '10px',
  };

  const highlightedText = {
    color: '#ff5823',
    fontFamily: 'Anton, sans-serif',
  };

  const profileRoleTagline = {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
  };

  const profilePicture = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 0px 0px var(--white)',
    borderRadius: '50%',
    height: 380,
    width: 380,
    margin: '0 0px 0 100px',
  };

  const profilePictureBackground = {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer', // Change cursor on hover
    transform: 'scale(1.07)',
    transition: '1s ease-out',
  };

  const hoverStyle = {
    backgroundColor: 'lightblue',   // Background color on hover
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isLinkIn, setIsLinkedIn] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  const [isInstagram, setIsInstagram] = useState(false);
  const [isTwitter, setIsTwitter] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  const [isYoutube, setIsYoutube] = useState(false);
  
  const imageStyle = {
    // width: "200px", // Set the width of the image
    // height: "auto", // Maintain the aspect ratio
    transition: 'transform 0.3s ease', // Smooth transition for transform property
    transform: 'isHovered ? scale(1.2) : "scale(1)', // Scale up on hover
    cursor: "pointer", // Change cursor on hover
  };

  return (
    <div className="profile-container" style={profileContainer}>
      <div className="profile-parent" style={profileParent}>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/feed/">
                <i className="fa fa-linkdin-square colzIcon-linkdin">
                  <AiFillLinkedin 
                  onMouseEnter={()=>setIsLinkedIn(true) }
                    onMouseLeave={()=>setIsLinkedIn(false)}         
                  style={isLinkIn?colzIconHover:colzIcon}/>
                </i>
              </a>

              <a href="https://web.facebook.com/Ryggo1/">
                <i className="fa fa-facebook-square colzIcon-facebook">
                  <IoLogoFacebook 
                  className="colzIcon-facebook" 
                  onMouseEnter={()=>setIsFacebook(true) }
                    onMouseLeave={()=>setIsFacebook(false)}  
                  style={isFacebook? colzconHoverFacebook:colzIcon}/>
                </i>
              </a>

              <a href="https://www.instagram.com/sam_generals/">
                <i className="fa fa-instagram-square colzIcon-instagram">
                  <FiInstagram className="colzIcon-instagram"
                   onMouseEnter={()=>setIsInstagram(true) }
                    onMouseLeave={()=>setIsInstagram(false)}  
                  style={isInstagram? colzconHoverInstagram:colzIcon} 
                  />
                </i>
              </a>

              <a href="https://twitter.com/home">
                <i className="fa fa-twitter-square colzIcon-twitter">
                  <BiLogoTwitter  
                  onMouseEnter={()=>setIsTwitter(true) }
                    onMouseLeave={()=>setIsTwitter(false)}  
                  style={isTwitter? colzconHoverTwitter:colzIcon} 
                />
                </i>
              </a>

              <a href="https://en.wikipedia.org/wiki/Google%2B">
                <i className="fa fa-google-plus-square colzIcon-google+">
                  <GrGooglePlus 
                  onMouseEnter={()=>setIsGoogle(true) }
                    onMouseLeave={()=>setIsGoogle(false)}  
                  style={isGoogle? colzconHoverGoogle:colzIcon} />
                </i>
              </a>

              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square colzIcon-youtube">
                  <FaYoutube className="olzIcon-youtube" 
                  onMouseEnter={()=>setIsYoutube(true) }
                    onMouseLeave={()=>setIsYoutube(false)}  
                  style={isYoutube? colzconHoverYoutube:colzIcon}  />
                </i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text" style={highlightedText}>
                Sam Generals
              </span>
            </span>
          </div>
          <div className="profile-detail-role">
            <span className="primary-text">
              {" "}
              <h1 style={typicalH1}>
                {" "}
                <Typical
                  loop={5}
                  steps={[
                    "Ethusiatic Developer 😎",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "MERN Stack Developer 🖥",
                    3000,
                    "Andriod / IOS Developer 📱",
                    3000,
                    "React/React Native Developer 📲",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline" style={profileRoleTagline}>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me <MdOutlineComputer />{" "}
            </button>
            <a
              href="SAMUEL MENSAH C.V-1.pdf"
              download="SAM SAMUEL MENSAH C.V-1.pdf"
              className="abtn"
             // style={{display:'flex',flexDirection:'row', alignContent:'center'}}
            >
              <button className="btn highlighted-btn">
                Get Resume <AiOutlineDownload />
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture" style={profilePicture}>
          <div
            className="profile-picture-background">
            {/* style={profilePictureBackground}> */}
            <img
              src={myImage} // Replace with your image URL
              alt="My Image"
              onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on hover
              onMouseLeave={() => setIsHovered(false)} // Set isHovered to false on hover out
              style={{ height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              borderRadius: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              cursor: 'pointer', // Change cursor on hover
              transition: isHovered?"transform 0.3s ease":"none", // Smooth transition for transform property
              transform: isHovered ? "scale(1.2) ": "scale(1)", // Scale up on hover
              cursor: "pointer", 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
