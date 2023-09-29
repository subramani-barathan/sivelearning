import KuralAccordian from "./KuralAccordian";
import kurals from "../../json/kural.json";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import {  Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Kural(props) {
  return (
    <Row className="justify-content-center">
      <BreadcrumbsItem
        glyph="home"
        to="/thirukkural/chaptergroup/chapter/kural"
      >
        Kurals
      </BreadcrumbsItem>
      <Col className="col-md-12 col-lg-12 mb-4">
        <Card className="card">
          <Card.Body className="card-body">
            <Card.Title>{props.chapterName} </Card.Title>
            <Row className="justify-content-center d-flex text-white">
              {kurals.map((kural) => {
                return (
                  props.kuralList.start <= kural.Number &&
                  props.kuralList.end >= kural.Number && (
                    <KuralAccordian kural={kural} />
                  )
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Kural;
