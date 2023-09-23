import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import kuralMeaning from '../../json/kural_meaning.json'

function KuralAccordian(props) {
  const [showTamil, setShowTamil] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [fetchKural, setFetechKural] = useState(false);

  const handleCloseEnglish = () => setShowEnglish(false);
  const handleCloseTamil = () => setShowTamil(false);
  const handleShowEnglish = (kuralNumber) => {
    const kural = kuralMeaning[kuralNumber]
    setFetechKural(kural);
    setShowEnglish(true)
  };
  const handleShowTamil = () => setShowTamil(true);
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              {props.kural.transliteration1}<br />
              {props.kural.transliteration2}
            </p>
            <button type="button" class="btn btn-primary btn-md" onClick={()=>handleShowEnglish(props.kural.Number)}>English</button>
            <button type="button" class="btn btn-primary btn-md mx-2" onClick={()=>handleShowTamil(props.kural.Number)}>Tamil</button>
          </div>
        </div>
      </div>
      <Modal show={showEnglish} onHide={handleCloseEnglish}>
        <Modal.Header closeButton>
          <Modal.Title>{props.kural.Translation}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>{fetchKural.explanation}</p>
        <p>{props.kural.couplet}</p>
        <p>     {props.kural.paul_transliteration} - {props.kural.paul_translation}</p>
        <p>     {props.kural.iyal_transliteration} - {props.kural.iyal_translation}</p>
        <p>     {props.kural.adikaram_transliteration} - {props.kural.adikaram_translation}</p>
                
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEnglish}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showTamil} onHide={handleCloseTamil}>
        <Modal.Header closeButton>
          <Modal.Title>{props.kural.Line1}<br />
                {props.kural.Line2}</Modal.Title>
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
  )
}

export default KuralAccordian;