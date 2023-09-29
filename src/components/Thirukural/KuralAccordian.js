import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import kuralMeaning from "../../json/kural_meaning.json";
import getRandomItem from "../constants/RandomColor";
import { randomVarient } from "../constants/constants";
import { Card, Col } from "react-bootstrap";

function KuralAccordian(props) {
  const [showTamil, setShowTamil] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [fetchKural, setFetechKural] = useState(false);

  const handleCloseEnglish = () => setShowEnglish(false);
  const handleCloseTamil = () => setShowTamil(false);
  const handleShowEnglish = (kuralNumber) => {
    const kural = kuralMeaning[kuralNumber];
    setFetechKural(kural);
    setShowEnglish(true);
  };
  const handleShowTamil = (kuralNumber) => {
    const kural = kuralMeaning[kuralNumber];
    setFetechKural(kural);
    setShowTamil(true);
  };
  const randomColor = getRandomItem(randomVarient);

  return (
    <>
      <Col className="col-md-6 col-lg-4 mb-4">
        <Card className={`bg-label-${randomColor}`}>
          <Card.Body>
            <p className={`card-text text-${randomColor}`}>
              {props.kural.transliteration1}
              <br />
              {props.kural.transliteration2}
            </p>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">                       
          <Button
              variant="light"
              type="button"
              onClick={() => handleShowEnglish(props.kural.Number)}
            >
              English
            </Button>
            <Button
              variant="light"
              type="button"
              onClick={() => handleShowTamil(props.kural.Number)}
            >
              Tamil
            </Button>
          </Card.Footer>
        </Card>
      </Col>
      <Modal show={showEnglish} onHide={handleCloseEnglish} className={`bg-label-${randomColor}`}>
        <Modal.Header className={`bg-label-${randomColor}`} closeButton>
          <Modal.Title className={`bg-label-${randomColor}`}>{props.kural.Translation}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{fetchKural.explanation}</p>
          <p>{props.kural.couplet}</p>
          <p>
            {props.kural.paul_transliteration} - {props.kural.paul_translation}
          </p>
          <p>
            {props.kural.iyal_transliteration} - {props.kural.iyal_translation}
          </p>
          <p>
            {props.kural.adikaram_transliteration} - {props.kural.adikaram_translation}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEnglish}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showTamil} onHide={handleCloseTamil} className={`bg-label-${randomColor}`}>
        <Modal.Header className={`bg-label-${randomColor}`} closeButton>
          <Modal.Title className={`bg-label-${randomColor}`}>
            {props.kural.Line1}
            <br />
            {props.kural.Line2}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{fetchKural.mu_karunanidhi}</p>
          <p>{fetchKural.mu_varadha}</p>
          <p>{fetchKural.salaman_papa}</p>
          <p>{fetchKural.pari_melakar}</p>
          <p>{fetchKural.mani_kudavar}</p>
          <p>{fetchKural.v_munusami}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTamil}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KuralAccordian;
