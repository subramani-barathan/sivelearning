import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import getRandomItem from "../constants/RandomColor";
import { randomVarient } from "../constants/constants";
import Kurals from "./Kural";
import { useState } from "react";

function Chapter(props) {
  const [kural, setKural] = useState();
  const [showChapter, setShowChapter] = useState(true);
  const [showKural, setShowKural] = useState(false);
  const [chapterName, setChapterName] = useState();

  const chapterList = props.chapterGroup
    .find((chapterGroup) => chapterGroup.translation === props.chapterGroupName)
    .chapters.detail.map((chapter) => chapter);

  const renderKurals = (chapter) => {
    setChapterName(chapter.name)
    setKural({ start: chapter.start, end: chapter.end });
    setShowKural(true);
    setShowChapter(false);
  };

  return (
    <>
      <Row>
        <BreadcrumbsItem
          glyph="home"
          to={`/thirukkural/${props.sectionName}/${props.chapterGroupName}`}
        >
          Chapters
        </BreadcrumbsItem>
        {showChapter && (
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 mb-4">
              <Card className="card">
                <Card.Body className="card-body">
                  <Card.Title>{props.chapterGroupName} </Card.Title>
                  <Row className="justify-content-center d-flex text-white">
                    {chapterList.map((chapter) => {
                      let randomColor = getRandomItem(randomVarient);
                      return (
                        <Col className={`col-md-4 col-lg-4 mb-4`}>
                          <Card className={`bg-label-${randomColor}`}>
                            <Card.Body>
                              <p className="text-center">
                                <Button
                                  className={`bg-label-${randomColor}`}
                                  variant="link"
                                  onClick={() => {
                                    renderKurals(chapter);
                                  }}
                                >
                                  {chapter.number} <br /> {chapter.name} (Tamil)
                                  <br /> {chapter.transliteration}
                                  (Transliteration)
                                  <br /> {chapter.translation} (Translation)
                                </Button>
                              </p>
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
        )}
      </Row>
      {showKural && <Kurals kuralList={kural} chapterName={chapterName} />}
    </>
  );
}

export default Chapter;
