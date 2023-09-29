import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ChapterGroups from "./ChapterGroup";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import Header from '../template/header/Header';
import LeftSidePanel from '../template/leftsidepanel/LeftSidePanel';

function Chapter() {
  const [sectionName, setSectionName] = useState();
  const [showSection, setShowSection] = useState(true);
  const [showChapterGroup, setShowChapterGroup] = useState(false);

  const renderIyalgal = (sectionName) => {
    setSectionName(sectionName);
    setShowChapterGroup(true);
    setShowSection(false);
  };

  
  return (
    <>
      <BreadcrumbsItem glyph="home" to="/thirukkural/sections/">
      பால்கள்
      </BreadcrumbsItem>
      <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <LeftSidePanel />
                <div className="layout-page">
                    <Header />
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
      {showSection && (
        <Row className="justify-content-center">
          <Col className="col-md-12 col-lg-12 mb-4">
            <Card className="card">
              <Card.Body className="card-body">
                <Card.Title className="card-title">
                  பால்கள்
                </Card.Title>
                <Card.Subtitle className="mb-3 card-subtitle text-muted">
                  Section
                </Card.Subtitle>
                <Row>
                  <Col className="col-md-4 col-lg-4 mb-4">
                    <Card className="bg-label-info">
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
                          கருத்துக்களைக் குறிபிட்டுள்ளார். அறத்துப்பால்
                          கீழ்காணும் இயல்களாக பகுகபட்டுள்ளன.
                        </div>
                      </Card.Body>
                      <Card.Footer className="align-self-end pt-0">
                        <Button
                          onClick={() => renderIyalgal("அறத்துப்பால்")}
                          variant="info"
                        >
                          இயல்கள்
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>

                  <Col className="col-md-4 col-lg-4 mb-4">
                    <Card className="bg-label-success">
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
                          பகுதியை திருவள்ளுவர் கீழ்காணும் இயல்களாக
                          பகுத்துள்ளார்.
                        </div>
                      </Card.Body>
                      <Card.Footer className="align-self-end pt-0">
                        <Button
                          onClick={() => renderIyalgal("பொருட்பால்")}
                          variant="success"
                        >
                          இயல்கள்
                        </Button>
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col className="col-md-4 col-lg-4 mb-4">
                    <Card className="bg-label-warning">
                      <Card.Body>
                        <Card.Title className="card-title tamil-font">
                          காமத்துப்பால்
                        </Card.Title>
                        <Card.Subtitle className="mb-3 card-subtitle text-muted">
                          Love
                        </Card.Subtitle>
                        <div>
                          இன்பம் (Inbam) இன்பத்துப்பால் (Inbathupal)
                          திருக்குறளின் மூன்றாம் 'பால்' ஆகும். இன்பம் பகுதி
                          உரையில் திருவள்ளுவர் அன்பு, அறம், பொருள், வீடு என்ற
                          வாழ்வின் நோக்கங்கள் பற்றிய கருத்துக்களை
                          குறிபிட்டுள்ளார். இன்பத்துப்பால் கீழ்காணும் இயல்களாக
                          பகுகபட்டுள்ளன.
                        </div>
                      </Card.Body>
                      <Card.Footer className="align-self-end pt-0">
                        <Button
                          onClick={() => renderIyalgal("காமத்துப்பால்")}
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
      )}
       </div>
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
      {showChapterGroup && <ChapterGroups sectionName={sectionName} />}
    </>
  );
}

export default Chapter;
