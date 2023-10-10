// AboutMe.js

import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';
import abtImg from '../../../assets/Home/About_Image.jpeg';


const AboutMe = () => {
  return (
    <div className="container-fluid about-me">
      <div className="row row-container">
        {/* Column for the image */}
        <div className="col-md-6 ima-container" >
          <div className="image-container">
            <img className="image-container" src={abtImg} alt="Your Name" />
          </div>
        </div>
        
        {/* Column for the "Experience" section */}
        <div className="col-md-6 aboutme-text">
          <h2 className="aboutFirstTitle">My Story</h2>
          <p className="aboutParagraph">
            I am a passionate and experienced web developer with a strong
            background in front-end and back-end development.
          </p>
          <h3 className="aboutH3-title">Experience</h3>
          <div className="scrollable-section">
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faUser} /> Front-End Developer at ABC Company
                (2018-2020)
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faUser} /> Back-End Developer at XYZ Inc.
                (2016-2018)
              </li>
              {/* Add more experiences as needed */}
            </ul>
          </div>
          <h3 className="aboutH3-title">Skills</h3>
          <div className="scrollable-section">
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCode} /> JavaScript (React, Node.js)
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCode} /> HTML5 and CSS3 (SASS/SCSS)
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCode} /> Database Management (SQL, MongoDB,Express.js)
              </li>
              
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


// import React from 'react';
// import './AboutMe.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';

// const AboutMe = () => {
//   return (
//     <div className="container about-me">
//       <h2>About Me</h2>
// <p>
// I am a passionate and experienced web developer with a strong
// background in front-end and back-end development.
// </p>
// <div className="image-container">
// <img src="your-image-url.jpg" alt="Your Name" />
// </div>
// <h3>Experience</h3>
// <div className="scrollable-section">
// <ul className="list-group">
//   <li className="list-group-item">
//     <FontAwesomeIcon icon={faUser} /> Front-End Developer at ABC Company
//     (2018-2020)
//   </li>
//   <li className="list-group-item">
//     <FontAwesomeIcon icon={faUser} /> Back-End Developer at XYZ Inc.
//     (2016-2018)
//   </li>
//   {/* Add more experiences as needed */}
// </ul>
// </div>
// <h3>Skills</h3>
// <div className="scrollable-section">
// <ul className="list-group">
//   <li className="list-group-item">
//     <FontAwesomeIcon icon={faCode} /> JavaScript (React, Node.js)
//   </li>
//   <li className="list-group-item">
//     <FontAwesomeIcon icon={faCode} /> HTML5 and CSS3 (SASS/SCSS)
//   </li>
//   <li className="list-group-item">
//     <FontAwesomeIcon icon={faCode} /> Database Management (SQL, MongoDB)
//   </li>
//   {/* Add more skills as needed */}
// </ul>
// </div>
// </div>
// );
// };

// export default AboutMe;
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AboutMe.css';


// const AboutMe = () => {
//   return (
//     <div className="aboutMe">
//       <div className="row">
//         <div className="col">
//           <div className="about-image"></div>
//           <div className="col">
//             <div className="tabs">
//               <div className="single-tab">
//                 <h2>About</h2>
//               </div>
//               <div className="single-tab">
//                 <h2>Skills</h2>
//               </div>
//               <div className="single-tab">
//                 <h2>Experience</h2>
//               </div>
//             </div>
//             <div className="tab-content">
//               {/* About Content */}
//               <div className="content">
//                 <h2>My Story</h2>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <h3>
//                   I am a Web Designer And software developer Having 10 Year of
//                   Experience
//                 </h3>
//                 <p>
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page when looking at its layout.
//                 </p>
//               </div>
//               {/* Skills Content */}
//               <div className="content">
//                 <h2>My Skills</h2>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <div className="skills-row">
//                   <div className="skills-col">
//                     <div className="progress">
//                       <h3>Developer</h3>
//                       <div className="progress">
//                         <div className="progress-bar">
//                           <span>80%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="skills-col">
//                     <div className="progress">
//                       <h3>Designer</h3>
//                       <div className="progress">
//                         <div className="progress-bar">
//                           <span>90%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="skills-col">
//                     <div className="progress">
//                       <h3>JavaScript</h3>
//                       <div className="progress">
//                         <div className="progress-bar">
//                           <span>85%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="skills-col">
//                     <div className="progress">
//                       <h3>React</h3>
//                       <div className="progress">
//                         <div className="progress-bar">
//                           <span>70%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Experience Content */}
//               <div className="content">
//                 <div className="experience-col">
//                   <h3>Web Developer</h3>
//                   <span>2021-2023</span>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                 </div>

//                 <div className="experience-col">
//                   <h3>Designer</h3>
//                   <span>2019-2023</span>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                 </div>

//                 <div className="experience-col">
//                   <h3>React Developer</h3>
//                   <span>2021-2023</span>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                 </div>

//                 <div className="experience-col">
//                   <h3>React Native Developer</h3>
//                   <span>2021-2023</span>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
