import {Col, Container, Row} from "react-bootstrap";

function UIdesigns() {
    return (
        <Container >
            <Row className="project-row px-4">
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
                    <div className="iframe-container text-center px-4">
                        <iframe   width="840" height="473" src="https://www.youtube.com/embed/QfqZZXqlBqs"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </Col>
            </Row>
        </Container>


    );
}

export default UIdesigns;
