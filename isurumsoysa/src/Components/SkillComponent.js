import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import SkillBubble from "./SkillBubble";

function SkillComponent(props) {
    let skillArr = props.skills;
    const skillBubbles = skillArr.map((skill)=>{
       return <SkillBubble key={skill.id} skill={skill}/>
    });
    return (
        <Container fluid>
            <Row className="project-row px-4">
                <Col md={0} lg={2} sm={0} className=""></Col>
                <Col md={12} lg={8} sm={12} className=" abt-tab-col my-2 py-3 px-4 mx-2">
                  <Row>
                      <h5 className="ms-1">{props.topic}</h5>
                  </Row>
                  <div className="skill-bubble-container">
                      {skillBubbles}
                  </div>
                </Col>
                <Col md={0} lg={2} sm={0} className=""></Col>
            </Row>
        </Container>


    );
}

export default SkillComponent;
