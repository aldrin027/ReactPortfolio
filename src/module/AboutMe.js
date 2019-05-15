import React, { Component } from "react";
import { Progress, CardDeck } from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5 } from '@fortawesome/free-solid-svg-icons';
import {
    faHtml5, faCss3Alt, faJs, faPhp, faReact, faLaravel,
    faGithub,
    faFacebookF, faGooglePlusG, faSkype
} from '@fortawesome/free-brands-svg-icons';
import Card from "../components/ProjectCard";
import Progressbar from '../components/Progressbar';

class AboutMe extends Component {

    render() {
        return <div>

            {/* Portfolio DP */}
            <div className="portfolio-image">
                <img src="images/tiger.jpeg" alt="Tiger"/>
            </div>

            <h2>About Me</h2>
            <div className="first-floor col-xs-12">
                {/* About Me */}
                <div className="about-me">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim consectetur ligula eget aliquam. Nunc fermentum neque leo, non interdum velit imperdiet quis. Nullam scelerisque nunc sit amet eros placerat condimentum. Nulla malesuada condimentum dui, in luctus lacus ornare at. Curabitur odio lorem, tempor vitae nisi eget, porta pulvinar mauris. In aliquet gravida arcu nec lacinia. Proin velit neque, vehicula sit amet fermentum vestibulum, laoreet eget tortor.
                    In non lobortis erat. Sed eget nisi pretium, congue neque ut, tempor mi. Phasellus nec leo a urna ullamcorper tristique in sit amet sapien. Integer dictum lectus placerat blandit efficitur. Nunc ac eros consequat est efficitur elementum non eu tortor. Nunc vitae consequat tortor. Aenean et aliquam tortor.
                    </p>
                </div>
            </div>
            
            <h2>Skills</h2>
            <div className="second-floor col-xs-12">
                {/* Skills */}
                <div className="my-skills">

                <div className="native-languages">
                    <div className="col-xs-3">
                        <FontAwesomeIcon icon={faHtml5}/> HTML
                        <div className="text-center">80%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                            <Progress bar animated value="20" color="success"></Progress>
                        </Progress>
                        {/* <Progressbar skillLevel={80} /> */}
                        {/* <Progress className="text-center" animated value={50} color="warning"> 50% </Progress> */}
                    </div>
                    <div className="col-xs-3">
                        <FontAwesomeIcon icon={faCss3Alt}/> CSS
                        <div className="text-center">50%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="20" color="warning"></Progress>
                        </Progress>
                        {/* <Progress className="text-center" animated value={50} color="warning"> 50% </Progress> */}
                    </div>
                    <div className="col-xs-3">
                        <FontAwesomeIcon icon={faJs}/> Javascript
                        <div className="text-center">80%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                            <Progress bar animated value="20" color="success"></Progress>
                        </Progress>
                        {/* <Progress className="text-center" animated value={80} color="success"> 80% </Progress> */}
                    </div>
                    <div className="col-xs-3">
                        <FontAwesomeIcon icon={faPhp}/> PHP
                        <div className="text-center">80%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                            <Progress bar animated value="20" color="success"></Progress>
                        </Progress>
                        {/* <Progress className="text-center" animated value={90} color="success"> 90% </Progress> */}
                    </div>
                </div>

                <div className="frameworks">
                    <div className="col-xs-6">
                        <FontAwesomeIcon icon={faReact}/> ReactJS
                        <div className="text-center">60%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                        </Progress>
                        {/* <Progress animated value={60} color="warning"> 60% </Progress> */}
                    </div>
                    <div className="col-xs-6">
                        <FontAwesomeIcon icon={faLaravel}/> Laravel
                        <div className="text-center">80%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                            <Progress bar animated value="20" color="success"></Progress>
                        </Progress>
                            {/* <Progress bar animated value="20" color="success"></Progress> */}
                        {/* <Progress animated value={90} color="success"> 90% </Progress> */}
                    </div>
                    <div className="col-xs-6">
                        <FontAwesomeIcon icon={faGithub}/> Github
                        <div className="text-center">70%</div>
                        <Progress multi>
                            <Progress bar animated value="30" color="danger"></Progress>
                            <Progress bar animated value="30" color="warning"></Progress>
                            <Progress bar animated value="10" color="success"></Progress>
                        </Progress>
                        {/* <Progress animated value={70} color="warning"> 70% </Progress> */}
                    </div>
                </div>

                </div>
            </div>
        
            <h2>Projects</h2>
            <div className="third-floor col-xs-12">
                <div className="project container">
                    <CardDeck>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardDeck>
                </div>
            </div>

            <h2>Contact Me</h2>
            <div className="fourth-floor col-xs-12">
                <div className="container social-apps-container">
                    <div className="social-app col-xs-2">
                        <a href="javascript:void(0)">
                            <FontAwesomeIcon icon={faFacebookF} size="2x"></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="social-app col-xs-2">
                        <a href="javascript:void(0)">
                            <FontAwesomeIcon icon={faGooglePlusG} size="2x"></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="social-app col-xs-2">
                        <a href="javascript:void(0)">
                            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="social-app col-xs-2">
                        <a href="javascript:void(0)">
                            <FontAwesomeIcon icon={faSkype} size="2x"></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>

        </div>;
    }
    
}

export default AboutMe;