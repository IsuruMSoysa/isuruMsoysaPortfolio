import {Col, Container, Row} from "react-bootstrap";
import {Button} from "bootstrap";

function Projects() {
    return (
        <Container >
            <Row className="project-row px-4">
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>examcarts.com (Web Application) - WIP</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Online Exam Management System</b><br/>
                            examcarts.com is a online exam management platform connect teachers,students and paper marking
                            instructors. This system is a web based system developed following MERN Stack.
                            <span style={{color:"#6F10B4"}}> React Typescript,
                                Node Js, Mongo DB, Express Js, SCSS, React Bootstrap, React Suite, Cloudinary, Node Mailer </span>
                            are some of the core libraries and services used for develop this system. This is an individual
                            project and now it's in the final stage in development.
                        </h6>
                    </div>
                </Col>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>Lake View Cottage (Web Application) - 2021</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Responsive Business Website</b><br/>
                            Lake View Cottage is a hotel located in Rikillagaskada, Nuwara Eliya. I contributed as the
                            <span style={{color:"#6F10B4"}}> Front-End developer </span> of this project. Front End
                            developed using    <span style={{color:"#6F10B4"}}> HTML, CSS and Bootstrap.</span>
                        </h6>
                    </div>
                    <div className="py-2">
                        <a href="http://lakeviewcottage.net/"
                           target="_blank"
                           rel="noopener noreferrer">
                        <button className="visit-website-btn px-3 py-1">
                         Visit Website
                        </button> </a>
                    </div>
                </Col></Col>
            </Row>

            <Row className="project-row px-4">
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>Liyane Arts (Web Application) - 2020</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Responsive Portfolio Website</b><br/>
                           Liyane Arts is a wood burn artist and yarn artwork artist. The portfolio website has an admin
                            panel also for update the website. I contributed as the
                            <span style={{color:"#6F10B4"}}> Front-End developer </span> of the website. The speciality
                            behind this project is I created the Front-End <span style={{color:"#6F10B4"}}>
                            only using HTMl and CSS including responsiveness.</span>
                        </h6>
                    </div>
                    <div className="py-2">
                        <a href="https://liyane-arts.herokuapp.com/"
                           target="_blank"
                           rel="noopener noreferrer">
                        <button className="visit-website-btn px-3 py-1">
                          Visit Website</button>  </a>
                    </div>
                </Col></Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>IM ASSIST (Mobile Application) - 2020</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Academic Assisting Mobile App for Undergraduates</b><br/>
                            IM Assist is an cross platform mobile application developed for targeting the undergraduates
                            of Department of Industrial Management, University f Kelaniya. I contributed as
                            <span style={{color:"#6F10B4"}}>the UI/UX Designer
                                and a Front-End developer </span> of this project. The mobile application was developed
                            using   <span style={{color:"#6F10B4"}}>Xamarin Forms, C# and Visual Studio IDE.</span>
                        </h6>
                    </div></Col>
                </Col>
            </Row>

            <Row className="project-row px-4">
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>Malinga Herath Photography (Web Application) - 2020</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Portfolio & Online Ordering Website</b><br/>
                            Malinga Herath Photography is a portfolio website and which includes the ordering system also.
                            I contributed as a
                            <span style={{color:"#6F10B4"}}> Front-End developer </span> of his project. This
                            project also developed <span style={{color:"#6F10B4"}}>
                            only using HTMl, CSS and Javascript.</span>
                        </h6>
                    </div>
                </Col></Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                    <div className="abt-tab px-1">
                        <h4 style={{color:"#6F10B4"}}>The New Tyre Center System (Stand-Alone Application) - 2019</h4>
                    </div>
                    <div className="pt-3">
                        <h6 style={{color:"#454545"}}>
                            <b>Inventory Management System</b><br/>
                            This Inventory Management System created for the New Tyre Center, Katubedda. I have contributed
                            as the <span style={{color:"#6F10B4"}}> UI/UX Designer </span> of this project. The Project
                            developed using <span style={{color:"#6F10B4"}}>Java and Netbeans IDE</span>
                        </h6>
                    </div>
                </Col></Col>
            </Row>
        </Container>
    );
}

export default Projects;
