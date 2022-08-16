import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import web from "../Images/Web.png";
import Li from "../Images/In.png";
import Fb from "../Images/fb.png";
import Comma from "../Images/coma.png";

function RecomCompo(props) {

    return (
        <Container fluid>
            <Row className="project-row px-4">
                <Col md={0} lg={2} sm={0} className=""></Col>
                <Col md={12} lg={8} sm={12} className=" abt-tab-col my-2 py-3 px-4 mx-2">
                    <Row className="">
                        <Col className="px-4 exp-det">
                            <Row>
                                <Col md={2} lg={2} xl={3} xs={3} sm={2} className="hello-comma text-start">
                                    <img src={Comma}
                                         width="10%"
                                         height="auto"
                                         alt='Greet' />
                                </Col>
                            </Row>
                           <Row>
                               <p style={{color:"#9818f3",fontWeight:"bold",fontSize:"1.1em"}}>{props.quate}</p><br/>
                           </Row>
                            <Row>
                                <Col md={2} sm={3} xs={3} lg={1}  className="rec-logo text-center px-0 ps-xs-2 py-0">
                                    <img src={props.pic}
                                         width="100%"
                                         height="auto"
                                         alt='Greet' />
                                </Col>
                                <Col sm={12} md={9} lg={11}>
                                    <h5 className="my-0" style={{color:"#585858"}}><b>{props.author}</b></h5>
                                    <label style={{color:"#bebabe"}}>{props.description1}<br/>{props.description2}</label>

                                    <Row className="px-2 py-2">
                                        {props.linkedInLink ?
                                            <Col className="px-0 me-1 col-1">
                                                <a href={props.linkedInLink} target="_blank" rel="noopener noreferrer">
                                                    <img src={Li}
                                                         className="exp-link"
                                                         width="55%"
                                                         height="auto"
                                                         alt='Linked In Link' /></a>
                                            </Col> : null
                                        }
                                        {props.fbLink ?
                                            <Col className="px-0 mx-1 col-1">
                                                <a href={props.fbLink} target="_blank" rel="noopener noreferrer">
                                                    <img src={Fb}
                                                         className="exp-link"
                                                         width="55%"
                                                         height="auto"
                                                         alt='Facebook Link' /></a>
                                            </Col> : null
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={0} lg={2} sm={0} className=""></Col>
            </Row>
        </Container>
    );
}

export default RecomCompo;
