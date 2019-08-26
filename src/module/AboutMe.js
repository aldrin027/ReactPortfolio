import React, { useEffect } from "react";
import { CardDeck } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHtml5 } from '@fortawesome/free-solid-svg-icons';
import {
  // faHtml5,
  // faCss3Alt,
  // faJs,
  // faPhp,
  // faReact,
  // faLaravel,
  faGithub,
  faFacebookF,
  faGooglePlusG,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import Card from "../components/ProjectCard";
// import Progressbar from "../components/Progressbar";
import Slider from "../components/Slider";
const isInViewPort = elem => {
  var bounding = elem.getBoundingClientRect();
  return bounding.top < window.innerHeight && bounding.bottom >= 0;
};
const AboutMe = () => {
  useEffect(() => {
    const parallax = document.getElementsByClassName("parallax-wrapper")[0];
    window.addEventListener(
      "scroll",
      () => {
        const second = document.getElementsByClassName("third-floor")[0];
        const project = document.getElementsByClassName("project_card");

        if (isInViewPort(second)) {
          console.log("viewport");
          for (let i = 0; i < project.length; i++) {
            setTimeout(() => {
              project[i].classList.add("custom-fadeIn");
            }, 500 * i);
          }
        }
      },
      1
    );
  }, []);

  const frontend = [
    {
      src: "/images/html.png",
      altText: "HTML",
      caption: "HTML"
    },
    {
      src: "/images/css.png",
      altText: "CSS",
      caption: "CSS"
    },
    {
      src: "/images/js.png",
      altText: "Javascript",
      caption: "Javascript"
    },
    {
      src: "/images/github.png",
      altText: "github",
      caption: "github"
    }
  ];

  const backend = [
    {
      src: "/images/php.png",
      altText: "PHP",
      caption: "PHP"
    },
    {
      src: "/images/apache.png",
      altText: "Apache",
      caption: "Apache"
    },
    {
      src: "/images/laravel.png",
      altText: "Laravel",
      caption: "Laravel"
    },
    {
      src: "/images/reactjs.png",
      altText: "React JS",
      caption: "React JS"
    }
  ];

  return (
    <>
      <div className="parallax-wrapper">
        {/* Portfolio DP */}
        {/* <div className="portfolio-image">
          <img src="images/tiger.jpeg" alt="Tiger" />
        </div> */}
        <div className="content col-xs-12">
          <h2>About Me</h2>

          {/* About Me */}
          <div className="about-me">
            <h5>Hello I'm Aldrin.</h5>
            <p>
              I'm a Fullstack Web Developer that wants to be update about the
              latest technology trends. I'm also a Trader/Investor but still got
              a long way about this. Loves music
            </p>
          </div>
        </div>
      </div>
      <div className="regular-wrapper second-floor">
        <div className="col-xs-12 container">
          <h2>Skills</h2>
          <div className="row">
            <div className="col-md-12">
              <h2>Front-end</h2>
              <Slider items={frontend} />
            </div>
            <div className="col-md-12">
              <h2>Back-end</h2>
              <Slider items={backend} />
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-wrapper">
        <div>
          <div className="third-floor col-xs-12">
            <h2>Projects</h2>
            <div className="project container">
              <CardDeck>
                <Card className="project_card" />
                <Card className="project_card" />
                <Card className="project_card" />
                <Card className="project_card" />
              </CardDeck>
            </div>
          </div>
        </div>
      </div>
      <div className="regular-wrapper">
        <div>
          <h2>Contact Me</h2>
          <div className="fourth-floor col-xs-12">
            <div className="container social-apps-container">
              <div className="social-app col-xs-2">
                <span href="#" onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </span>
              </div>
              <div className="social-app col-xs-2">
                <span href="#" onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
                </span>
              </div>
              <div className="social-app col-xs-2">
                <span href="#" onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </span>
              </div>
              <div className="social-app col-xs-2">
                <span href="#" onClick={e => e.preventDefault()}>
                  <FontAwesomeIcon icon={faSkype} size="2x" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
