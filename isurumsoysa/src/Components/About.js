import {Col, Container, Row} from "react-bootstrap";

function About() {
    return (
        <Container >
            <Row>
                <Col lg={6} md={12} sm={12} xs={12} className="col-6">
                    <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                        <div className="abt-tab px-1">
                            <h4 style={{color:"#6F10B4"}}>Academic Qualifications</h4>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>B.Sc. in Management and Information Technology (2019 - Present)</b><br/>
                                Department of Industrial Management,<br/>
                                University of Kelaniya
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>G.C.E. A/L Examination (2017)</b><br/>
                                Sri Sumangala College,<br/>
                                Panadura<br/>
                                Passed with 1'A' pass, 1'B' pass and 1'C' pass
                            </h6>
                        </div>
                    </Col>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                    <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                        <div className="abt-tab px-1">
                            <h4 style={{color:"#6F10B4"}}>Professional Qualifications</h4>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Diploma in English (2019)</b><br/>
                                Aquainas College of Higher Studies,<br/>
                                Colombo 07<br/>
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Certificate Course in C, C++ Languages (2018)</b><br/>
                                Thesaurus Computer Centre, <br/>
                                Panadura
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Technical Competency Examination - LIFE (2018)</b><br/>
                                Sri Lanka Insurance Institute<br/>
                                Sri Lnaka
                            </h6>
                        </div>
                    </Col>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                    <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                        <div className="abt-tab px-1">
                            <h4 style={{color:"#6F10B4"}}>Online Certifications</h4>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Fundamentals of Digital Marketing  (2021)</b><br/>
                                Google Digital Garage
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Inbound Marketing certification (2021)</b><br/>
                                Hubspot Academy
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Master in Microsoft Power BI Desktop and Service (2021)    </b><br/>
                                Udemy
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Programming Foundations with JavaScript, HTML & CSS (2020)</b><br/>
                                Cousera
                            </h6>
                        </div>
                    </Col>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}  className="col-6">
                    <Col className="abt-tab-col my-2 py-3 px-4 mx-2">
                        <div className="abt-tab px-1">
                            <h4 style={{color:"#6F10B4"}}>Extra Curricular Activities</h4>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Junior Treasurer (2020 - 2021)</b><br/>
                                Vidulakara Ekamuthuwa(VidE), <br/>
                                University of Kelaniya<br/>
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Editor (2020 - 2021)</b><br/>
                                Buddhist Students' Association, <br/>
                                University of Kelaniya
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Project Manager (2020 - 2021)</b><br/>
                                Exposition Magazine - 16th Issue<br/>
                                Department of Industrial Management,<br/>
                                University of Kelaniya
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Assistant Secretary (2019 - 2020)</b><br/>
                                Industrial Management Science Students' Association<br/>
                                Department of Industrial Management,<br/>
                                University of Kelaniya
                            </h6>
                        </div>
                        <div className="pt-3">
                            <h6 style={{color:"#454545"}}>
                                <b>Rugby Team Member  (2019 - 2020)</b><br/>
                                University of Kelaniya
                            </h6>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>


    );
}

export default About;
