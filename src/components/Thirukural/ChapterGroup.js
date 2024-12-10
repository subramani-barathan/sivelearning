import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ThirukkuralDetails from "../../json/detail.json";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import getRandomItem from "../constants/RandomColor";
import { randomVarient } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ChapterGroup() {
  const navigate = useNavigate();
  const { chgrpid } = useParams();
  const section = ThirukkuralDetails.section.detail.find(
    (section) => section.translation === chgrpid
  );
  const chapterGroupList = section.chapterGroup.detail.map(
    (chapterGroup) => chapterGroup
  );

  const renderChapters = (sectionName, chapterGroupName) => {
    navigate("/thirukkural/sections/" + sectionName + "/" + chapterGroupName);
  };
  return (
    <>
      {" "}
      <BreadcrumbsItem glyph="home" to="/thirukkural">
        திருக்குறள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to="/thirukkural/sections">
        பால்கள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${chgrpid}`}>
        இயல்கள்
      </BreadcrumbsItem>
      <Row className="justify-content-center">
        <Col className="col-md-12 col-lg-12 mb-4">
          <Card className="card">
            <Card.Body className="card-body">
            <h1 className="title">{section.name}</h1>
            <h3 className="sub-title  text-muted">{section.translation}</h3>
              <Row className="justify-content-center d-flex text-white">
                {chapterGroupList.map((iyal) => {
                  let randomColor = getRandomItem(randomVarient);
                  return (
                    <Col
                      className="justify-content-center col-md-4 col-lg-4 mb-4"
                      key={iyal.name}
                    >
                      <Card className={`bg-label-${randomColor}`}>
                        <Card.Header className="d-flex justify-content-end align-item-center p-0">
                          <span
                            className={`bg-${randomColor} text-white py-1 px-2 align-middle corner-label`}
                          >
                            {iyal.number}
                          </span>
                        </Card.Header>
                        <Card.Body
                              className={`text-center bg-label-${randomColor}`}
                              onClick={() => {
                                renderChapters(
                                  section.translation,
                                  iyal.translation
                                );
                              }}
                            >
                              {iyal.name} <br />
                              {iyal.translation}
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChapterGroup;
