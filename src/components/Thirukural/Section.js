import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import { useNavigate } from "react-router-dom";

function Section() {
  const navigate = useNavigate();

  const renderIyalgal = (sectionName) => {
    navigate("/thirukkural/sections/" + sectionName);
  };

  return (
    <>
      <BreadcrumbsItem glyph="home" to="/thirukkural">
        திருக்குறள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to="/thirukkural/sections">
        பால்கள்
      </BreadcrumbsItem>
      <Row className="justify-content-center">
        <Col className="col-md-12 col-lg-12 mb-4">
          <Card className="card">
            <Card.Body className="card-body">
              <h1 className="title">பால்கள்</h1>
              <h3 className="subtitle text-muted">
                Section
              </h3>
              <Row>
                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className="bg-label">
                    <Card.Body>
                      <Card.Title className="card-title">
                        அறத்துப்பால்
                      </Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">
                        Virtue
                      </Card.Subtitle>
                      <div>
                        அறம் (Aram) அறத்துப்பால் (Arathupal) திருக்குறளின்
                        முப்பல்களில் முதற் 'பால்' ஆகும். அறம் பகுதி உரையில்
                        திருவள்ளுவர் நல்வழி, ஒழுங்கு, தர்மம் போன்ற
                        கருத்துக்களைக் குறிபிட்டுள்ளார். அறத்துப்பால் கீழ்காணும்
                        இயல்களாக பகுகபட்டுள்ளன.
                      </div>
                    </Card.Body>
                    <Card.Footer className="align-self-end pt-0">
                      <Button
                        onClick={() => renderIyalgal("Virtue")}
                        variant="info"
                      >
                        இயல்கள்
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className="bg-label">
                    <Card.Body>
                      <Card.Title className="card-title">
                        பொருட்பால்
                      </Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">
                        Wealth
                      </Card.Subtitle>
                      <div>
                        பொருள் (Porul) பொருட்பால் (Porutpal) திருக்குறளின்
                        முப்பல்களில் இரண்டாம் 'பால்' ஆகும். இவ்வுலகத்தில் உள்ள
                        அனைத்தும் பொருட்களால் ஆனது. பொருள் அல்லது பொருட்பால்
                        பகுதியை திருவள்ளுவர் கீழ்காணும் இயல்களாக பகுத்துள்ளார்.
                      </div>
                    </Card.Body>
                    <Card.Footer className="align-self-end pt-0">
                      <Button
                        onClick={() => renderIyalgal("Wealth")}
                        variant="success"
                      >
                        இயல்கள்
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className="bg-label">
                    <Card.Body>
                      <Card.Title className="card-title tamil-font">
                        காமத்துப்பால்
                      </Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">
                        Love
                      </Card.Subtitle>
                      <div>
                        இன்பம் (Inbam) இன்பத்துப்பால் (Inbathupal) திருக்குறளின்
                        மூன்றாம் 'பால்' ஆகும். இன்பம் பகுதி உரையில் திருவள்ளுவர்
                        அன்பு, அறம், பொருள், வீடு என்ற வாழ்வின் நோக்கங்கள்
                        பற்றிய கருத்துக்களை குறிபிட்டுள்ளார். இன்பத்துப்பால்
                        கீழ்காணும் இயல்களாக பகுகபட்டுள்ளன.
                      </div>
                    </Card.Body>
                    <Card.Footer className="align-self-end pt-0">
                      <Button
                        onClick={() => renderIyalgal("Love")}
                        variant="warning"
                      >
                        இயல்கள்
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Section;
