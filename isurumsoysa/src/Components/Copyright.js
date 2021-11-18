import {Col, Container, Row} from "react-bootstrap";

function Copyright() {
    return (
        <Container fluid>
           <Row className="copy-row">
               <Col className="text-center py-4">
                   <p style={{color:"#585858"}}>&copy; 2021 isumso | developed by isuru m soysa</p>
               </Col>
           </Row>
        </Container>


    );
}

export default Copyright;
