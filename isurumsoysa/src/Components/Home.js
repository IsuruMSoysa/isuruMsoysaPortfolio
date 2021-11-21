import {Col, Container, Row} from "react-bootstrap";
import ProfileImage from '../Images/PortPhoto.png';
import Comma from '../Images/coma.png';
import Mobile from '../Images/mobile.png';
import Email from '../Images/email.png';
import Git from '../Images/git.png';
import Li from '../Images/In.png';
import Fb from '../Images/fb.png';

function Home() {
    return (
        <Container fluid>
            <Row className="home-row">
                <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} className="home-intro col-6">
                    {/*<div className="home-intro-inter">*/}
                        <Row>
                            <Col>
                               <Row className="hello-box text-center">
                                   <Col md={5} className=" hello-comma col-5 text-end">
                                       <img src={Comma}
                                            width="55%"
                                            height="auto"
                                            alt='Greet' />
                                   </Col>
                                   <Col xs={4} md={6} className=" col-7 pt-3 text-start">
                                       <h1 className="hello-text pb-2">Hello, I'm<br/>Isuru Soysa!</h1>
                                   </Col>
                               </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col  className="col-5"></Col>
                            <Col className="home-description col-7 py-2 py-md-4 pt-sm-4 ps-3 text-start">
                                    <label>
                                        I’m a creative minded personality desirous in
                                        <span style={{color:"#6F10B4"}}> Graphic Designing </span>
                                        and<span style={{color:"#6F10B4"}}> UI/UX Designing</span>.
                                    </label>
                            </Col>
                        </Row>
                        <Row>
                            <Col  className="col-5"></Col>
                            <Col  className="home-description">
                                <div className="col-7 pt-1 pb-2">
                                    <a href="https://drive.google.com/file/d/1ErVsazpkdLUq1GGCGsRWMjg-7BLrkaQN/view?usp=sharing"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <button className="visit-website-btn px-3 py-1">
                                            View My Resume
                                        </button> </a>
                                </div>
                            </Col>
                    </Row>
                        <Row className="py-2">
                            <Col className="col-5">
                            </Col>
                            <Col className="py-1 ps-3 col-4">
                                <Row>
                                    <Col className="exp-link">
                                        <a href="mailto:isurumsoysa@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <img className="my-links"
                                            src={Email}
                                             width="75%"
                                             height="auto"
                                             alt='Greet' /></a>
                                    </Col>
                                    <Col className="exp-link">
                                        <a href="https://www.linkedin.com/in/isuru-m-soysa/" target="_blank" rel="noopener noreferrer">
                                        <img src={Li}
                                             className="my-links"
                                             width="75%"
                                             height="auto"
                                             alt='Greet' /></a>
                                    </Col>
                                    <Col className="exp-link">
                                        <a href="https://github.com/IsuruMSoysa" target="_blank" rel="noopener noreferrer">
                                        <img src={Git}
                                             width="75%"
                                             className="my-links"
                                             height="auto"
                                             alt='Greet' /></a>
                                    </Col>
                                    <Col className="exp-link">
                                        <a href="https://www.facebook.com/profile.php?id=100009437648038" target="_blank" rel="noopener noreferrer">
                                        <img src={Fb}
                                             width="75%"
                                             className="my-links"
                                             height="auto"
                                             alt='Greet' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}  className="hello-img text-center col-6">
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
