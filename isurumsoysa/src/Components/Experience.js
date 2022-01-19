import {Col, Container, Row} from "react-bootstrap";
import {Steps} from "rsuite";
import Mobile from "../Images/mobile.png";
import Email from "../Images/email.png";
import Li from "../Images/In.png";
import web from "../Images/Web.png";
import Fb from "../Images/fb.png";
import acc from "../Images/Logos/acc.png";
import adv from "../Images/Logos/adv.png";
import soft from "../Images/Logos/soft.png";
import yng from "../Images/Logos/yng.png";
import ual from "../Images/Logos/ua.png";


function Experience() {

    return (
        <Container >
            <div>
                <Row className=" project-row px-4">
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                    <Col md={12} lg={8} sm={12} className="col-8 abt-tab-col my-2 py-3 px-4 mx-2">
                        <Row className="">
                            <Col sm={12} md={3} lg={3} xs={12} className="exp-logo col-3 text-center">
                                <img src={acc}
                                     width="70%"
                                     height="auto"
                                     alt='Greet' />
                            </Col>
                            <Col sm={12} md={9} lg={9} xs={12} className="exp-det col-9">
                                <h5 style={{color:"#6F10B4"}}><b>Front-End Developer and Marketing Team Member </b></h5>
                                <h5 style={{color:"#585858"}}>AccSeedd IT Solutions (Pvt) Ltd.</h5>
                                <h6 style={{color:"#585858"}}>2020 Feb - Present</h6>
                                <Row className="px-2 py-0 ">
                                    <Col className=" px-0 mx-1 col-1">
                                        <a href="http://www.accseedd.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={web}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             style={{cursor:"pointer"}}
                                             alt='Facebook Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.linkedin.com/company/accseedd/" target="_blank" rel="noopener noreferrer">
                                        <img src={Li}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Linked In Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.facebook.com/AccSeedd" target="_blank" rel="noopener noreferrer">
                                        <img src={Fb}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                </Row>
                <Row className="project-row px-4">
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                    <Col md={12} lg={8} sm={12} className="col-8 abt-tab-col my-2 py-3 px-4 mx-2">
                        <Row className="">
                            <Col sm={12} md={3} lg={3} xs={12} className="exp-logo col-3 text-center">
                                <img src={adv}
                                     width="70%"
                                     height="auto"
                                     alt='Greet' />
                            </Col>
                            <Col sm={12} md={9} lg={9} xs={12} className="exp-det col-9">
                                <h5 style={{color:"#6F10B4"}}><b>Intern - Marketing and Business Development</b></h5>
                                <h5 style={{color:"#585858"}}>Advantis 3PL Plus (Logiwiz Ltd.)</h5>
                                <h6 style={{color:"#585858"}}>2021</h6>
                                <Row className="px-2 py-0">
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://advantis.world/3pl/" target="_blank" rel="noopener noreferrer">
                                        <img src={web}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://advantis.world/3pl/" target="_blank" rel="noopener noreferrer">
                                        <img src={Li}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Linked In Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.facebook.com/advantis3plplus" target="_blank" rel="noopener noreferrer">
                                        <img src={Fb}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                </Row>

                <Row className="project-row px-4">
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                    <Col md={12} lg={8} sm={12} className="col-8 abt-tab-col my-2 py-3 px-4 mx-2">
                        <Row className="">
                            <Col sm={12} md={3} lg={3} xs={12} className="exp-logo col-3 text-center">
                                <img src={soft}
                                     width="70%"
                                     height="auto"
                                     alt='Greet' />
                            </Col>
                            <Col sm={12} md={9} lg={9} className="exp-det col-9">
                                <h5 style={{color:"#6F10B4"}}><b>Industrial Training - React Base</b></h5>
                                <h5 style={{color:"#585858"}}>SoftVessel (Pvt) Ltd.</h5>
                                <h6 style={{color:"#585858"}}>2021 Apr - Present</h6>
                                <Row className="px-2 py-0">
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.softvessel.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={web}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.linkedin.com/company/softvessel/" target="_blank" rel="noopener noreferrer">
                                        <img src={Li}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Linked In Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.facebook.com/SoftVessel" target="_blank" rel="noopener noreferrer">
                                        <img src={Fb}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                </Row>

                <Row className="project-row px-4">
                    <Col className="col-2"></Col>
                    <Col md={12} lg={8} sm={12} className="col-8 abt-tab-col my-2 py-3 px-4 mx-2">
                        <Row className="">
                            <Col sm={12} md={3} lg={3} xs={12} className="exp-logo col-3 text-center">
                                <img src={yng}
                                     width="70%"
                                     height="auto"
                                     alt='Greet' />
                            </Col>
                            <Col  className="exp-det col-9">
                                <h5 style={{color:"#6F10B4"}}><b>Graphic Designer</b></h5>
                                <h5 style={{color:"#585858"}}>Mawbima Young Magazine</h5>
                                <h6 style={{color:"#585858"}}>2020 May - 2020 Nov</h6>
                                <Row className="px-2 py-0">
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.facebook.com/MawbimaYoung" target="_blank" rel="noopener noreferrer">
                                        <img src={Fb}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                </Row>

                <Row className="project-row px-4">
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                    <Col md={12} lg={8} sm={12} className="col-8 abt-tab-col my-2 py-3 px-4 mx-2">
                        <Row className="">
                            <Col sm={12} md={3} lg={3} xs={12} className="exp-logo col-3 text-center">
                                <img src={ual}
                                     width="70%"
                                     height="auto"
                                     alt='Greet' />
                            </Col>
                            <Col  className="exp-det col-9">
                                <h5 style={{color:"#6F10B4"}}><b>Financial Advisor</b></h5>
                                <h5 style={{color:"#585858"}}>Union Assurance PLC</h5>
                                <h6 style={{color:"#585858"}}>2017 Nov - 2019 Apr</h6>
                                <Row className="px-2 py-0">
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://unionassurance.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={web}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.linkedin.com/company/union-assurance-plc/" target="_blank"
                                           rel="noopener noreferrer">
                                        <img src={Li}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Linked In Link' /></a>
                                    </Col>
                                    <Col className="px-0 mx-1 col-1">
                                        <a href="https://www.facebook.com/UnionAssurance" target="_blank"
                                           rel="noopener noreferrer">
                                        <img src={Fb}
                                             className="exp-link"
                                             width="75%"
                                             height="auto"
                                             alt='Facebook Link' /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={0} lg={2} sm={0} className="col-2"></Col>
                </Row>
            </div>
        </Container>
    );
}

export default Experience;
