import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import getRandomItem from "../constants/RandomColor";
import { randomVarient } from "../constants/constants";
import { useParams } from "react-router-dom";
import ThirukkuralDetails from "../../json/detail.json";
import { useNavigate } from "react-router-dom";

function Chapter(props) {
  const { chgrpid, chid } = useParams();
  const navigate = useNavigate();

  const section = ThirukkuralDetails.section.detail.find(
    (section) => section.translation === chgrpid
  );
  const chapterGroup = section.chapterGroup.detail.find(
    (chapterGroup) => chapterGroup.translation === chid
  );
  const chapters = chapterGroup.chapters.detail.map((chapter) => chapter);

  const renderKurals = (chapter) => {
    navigate(
      "/thirukkural/sections/" +
        section.translation +
        "/" +
        chapterGroup.translation +
        "/" +
        chapter.start +
        ":" +
        chapter.end
    );
  };

  return (
    <>
      <BreadcrumbsItem glyph="home" to="/thirukkural">
        திருக்குறள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to="/thirukkural/sections">
        பால்கள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${chgrpid}`}>
        இயல்கள்
      </BreadcrumbsItem>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/sections/${chgrpid}/${chid}`}>
        அதிகாரம்
      </BreadcrumbsItem>
            <Row>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 mb-4">
            <Card className="card">
              <Card.Body className="card-body">
              <h1 className="title">{chapterGroup.name}</h1>
            <h3 className="sub-title text-muted">{chapterGroup.translation}</h3>
                <Row className="justify-content-center d-flex text-white">
                  {chapters.map((chapter) => {
                    let randomColor = getRandomItem(randomVarient);
                    return (
                      <Col
                        className={`col-md-4 col-lg-4 mb-4`}
                        key={chapter.name}
                      >
                        <Card className={`bg-label-${randomColor}`}>
                          <Card.Header className="d-flex justify-content-end align-item-center p-0">
                            <span
                              className={`bg-${randomColor} text-white py-1 px-2 align-middle corner-label`}
                            >
                              {chapter.number}
                            </span>
                          </Card.Header>
                          <Card.Body>
                            <div className="text-center">
                              <Button
                                className={`bg-label-${randomColor}`}
                                variant="link"
                                onClick={() => {
                                  renderKurals(chapter);
                                }}
                              >
                                {chapter.name}
                                <br /> {chapter.translation}
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Chapter;
