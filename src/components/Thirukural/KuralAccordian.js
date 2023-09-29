import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import kuralMeaning from "../../json/kural_meaning.json";
import getRandomItem from "../constants/RandomColor";
import { randomVarient } from "../constants/constants";
import { Card, Col } from "react-bootstrap";

function KuralAccordian(props) {
  const [showTamil, setShowTamil] = useState(false);
  const [randomColor] = useState(getRandomItem(randomVarient));
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

  return (
    <>
      <Col className="col-md-6 col-lg-6 mb-4">
        <Card className={`bg-label-${randomColor}`}>
          <Card.Body>
            <p className={`card-text text-${randomColor}`}>
              {props.kural.Line1}
              <br />
              {props.kural.Line2}
            </p>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between pt-0">                       
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
              தமிழ்
            </Button>
          </Card.Footer>
        </Card>
      </Col>
      <Modal show={showEnglish} size="lg" onHide={handleCloseEnglish} className={`bg-label-${randomColor}`}>
        <Modal.Header className={`bg-label-${randomColor} fw-bold pb-3`}>
          {props.kural.Translation}
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
        <Modal.Footer className={`bg-label-${randomColor}`}>
          <Button variant="secondary" onClick={handleCloseEnglish}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showTamil} size="lg" onHide={handleCloseTamil} className={`bg-label-${randomColor}`}>
        <Modal.Header className={`bg-label-${randomColor} fw-bold pb-3`}>
            {props.kural.Line1}
            <br />
            {props.kural.Line2}
        </Modal.Header>
        <Modal.Body>
        {fetchKural.mu_karunanidhi && <p><b>{fetchKural.mu_karunanidhi.split(":")[0]}</b>: {fetchKural.mu_karunanidhi.split(":")[1]}</p>}
        {fetchKural.mu_varadha && <p><b>{fetchKural.mu_varadha.split(":")[0]}</b>: {fetchKural.mu_varadha.split(":")[1]}</p>}
        {fetchKural.salaman_papa && <p><b>{fetchKural.salaman_papa.split(":")[0]}</b>: {fetchKural.salaman_papa.split(":")[1]}</p>}
        {fetchKural.pari_melakar && <p><b>{fetchKural.mu_varadha.split(":")[0]}</b>: {fetchKural.pari_melakar.split(":")[1]}</p>}
        {fetchKural.mani_kudavar && <p><b>{fetchKural.mani_kudavar.split(":")[0]}</b>: {fetchKural.mani_kudavar.split(":")[1]}</p>}
        {fetchKural.v_munusami && <p><b>{fetchKural.v_munusami.split(":")[0]}</b>: {fetchKural.v_munusami.split(":")[1]}</p>}
        </Modal.Body>
        <Modal.Footer className={`bg-label-${randomColor}`}>
          <Button variant="secondary" onClick={handleCloseTamil}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default KuralAccordian;
