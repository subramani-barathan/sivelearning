import KuralAccordian from "./KuralAccordian";
import kuralJSON from "../../json/kural.json";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

function Kural() {
  const { kuralid } = useParams();
  const start = kuralid.split(":")[0];
  const end = kuralid.split(":")[1];
  const kurals = kuralJSON.filter(
    (kural) => start <= kural.Number && end >= kural.Number
  );
  return (
    <>
      <BreadcrumbsItem glyph="home" to="/thirukkural">
        திருக்குறள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to="/thirukkural/sections">
        பால்கள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${kurals[0].paul_translation}`}>
        இயல்கள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${kurals[0].paul_translation}/${kurals[0].iyal_translation}`}>
        அதிகாரம்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${kurals[0].paul_translation}/${kurals[0].iyal_translation}/${kuralid}`}>
        குறள்கள்
      </BreadcrumbsItem>
      <h1>குறள்கள்</h1>
      <Row className="justify-content-center">
        <Col className="col-md-12 col-lg-12 mb-4">
          <Card className="card">
            <Card.Body className="card-body">
              <Card.Title>{kurals[0].adikaram_name}</Card.Title>
              {start && end && (
                <Row className="justify-content-center d-flex text-white">
                  {kurals.map((kural) => (
                    <KuralAccordian kural={kural} key={kural.Number} />
                  ))}
                </Row>
              )}
              {!start ||
                (!end && (
                  <div className="alert alert-warning">The URI is wrong</div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Kural;
