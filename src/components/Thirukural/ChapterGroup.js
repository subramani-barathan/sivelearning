import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ThirukkuralDetails from "../../json/detail.json";
import { useState } from "react";
import { BreadcrumbsItem } from "../template/breadcrumb/BreadcrumbDetails";
import Chapters from "./Chapter";
import getRandomItem from "../constants/RandomColor";
import { randomColors, randomVarient } from "../constants/constants";

function ChapterGroup(props) {
  const [chapterGroup, setChapterGroup] = useState();
  const [chapterGroupName, setChapterGroupName] = useState();
  const [showChapter, setShowChapter] = useState(false);
  const [showChapterGroup, setShowChapterGroup] = useState(true);

  const chapterGroupList = ThirukkuralDetails.section.detail
    .find((section) => section.translation === props.sectionName)
    .chapterGroup.detail.map((chapterGroup) => chapterGroup);

  const renderChapters = (chapterGroupName) => {
    setChapterGroup(chapterGroupList);
    setChapterGroupName(chapterGroupName);
    setShowChapter(true);
    setShowChapterGroup(false);
  };
  return (
    <>
      <BreadcrumbsItem glyph="home" to={`/thirukkural/${props.sectionName}`}>
        Chapter Group
      </BreadcrumbsItem>

      {showChapterGroup && (
        <Row className="justify-content-center">
          <Col className="col-md-12 col-lg-12 mb-4">
            <Card className="card">
              <Card.Body className="card-body">
                <Card.Title className="mt-3">{props.sectionName}</Card.Title>
                <Row className="justify-content-center d-flex text-white">

                {chapterGroupList.map((iyal) => {
                  let randomColor = getRandomItem(randomVarient);
                  return (
                    <Col className="justify-content-center col-md-4 col-lg-4 mb-4">
                      <Card className={`bg-label-${randomColor}`}>
                        <Card.Body>
                          <p className="text-center">
                            <Button className={`bg-label-${randomColor}`}
                              variant="link"
                              onClick={() => {
                                renderChapters(iyal.translation);
                              }}
                            >
                              {iyal.name} ({iyal.transliteration}) <br />
                              {iyal.translation} (Translation)
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
          </Col>
        </Row>
      )}
      {showChapter && (
        <Chapters
          chapterGroup={chapterGroup}
          chapterGroupName={chapterGroupName}
          sectionName={props.sectionName}
        />
      )}
    </>
  );
}

export default ChapterGroup;
