import {Col, Container, Row} from "react-bootstrap";
import ProfileImage from '../Images/PortPhoto.png';
import Comma from '../Images/coma.png';
import Mobile from '../Images/mobile.png';
import Email from '../Images/email.png';
import Git from '../Images/git.png';
import Li from '../Images/In.png';

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col className="home-intro  col-6">
                    <div className="home-intro-inter">
                        <Row>
                            <Col>
                               <Row className="hello-box">
                                   <Col className="col-5 text-end">
                                       <img src={Comma}
                                            width="55%"
                                            height="auto"
                                            alt='Greet' />
                                   </Col>
                                   <Col className=" col-7 pt-3 text-start">
                                       <h1 className="hello-text pb-2">Hello, I'm<br/>Isuru Soysa!</h1>
                                   </Col>
                               </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-5"></Col>
                            <Col className="home-description col-7 py-2 ps-3 text-start">
                                    <label>
                                        I’m a creative minded personality desirous in<br/>
                                        <span style={{color:"#6F10B4"}}>Graphic Designing </span>
                                        and<span style={{color:"#6F10B4"}}> UI/UX Designing</span>.
                                    </label>
                            </Col>
                        </Row>
                        <Row className="py-2">
                            <Col className="col-5">

                            </Col>
                            <Col className="py-1 ps-3 col-4">
                                <Row>
                                    <Col>
                                        <img src={Mobile}
                                             width="75%"
                                             height="auto"
                                             alt='Greet' />
                                    </Col>
                                    <Col>
                                        <img src={Email}
                                             width="75%"
                                             height="auto"
                                             alt='Greet' />
                                    </Col>
                                    <Col>
                                        <img src={Li}
                                             width="75%"
                                             height="auto"
                                             alt='Greet' />
                                    </Col>
                                    <Col>
                                        <img src={Git}
                                             width="75%"
                                             height="auto"
                                             alt='Greet' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className="col-6 ">
                    <img src={ProfileImage}
                         width="85%"
                         height="auto"
                         alt='Profile Image' />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;