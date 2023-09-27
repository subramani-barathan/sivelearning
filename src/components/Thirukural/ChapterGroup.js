import { Button, Col, Row, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ThirukkuralDetails from '../../json/detail.json'
import { useState } from 'react';
import KuralList from './Kural';
import { BreadcrumbsItem } from '../template/breadcrumb/BreadcrumbDetails';

function ChapterGroup() {
  const [iyalList, setIyalList] = useState();
  const [chapterList, setChapterList] = useState();
  const [kuralList, setKuralList] = useState();
  const [showSection, setShowSection] = useState(false);
  const [showChapterGroup, setShowChapterGroup] = useState(false);
  const [showChapter, setShowChapter] = useState(false);
  const [showKural, setShowKural] = useState(false);

  const renderIyalgal = (paalNumber) => ThirukkuralDetails.section.detail.map((paal) => {
    try {
      if (paal.number === paalNumber) {
        setIyalList(paal.chapterGroup.detail.map((iyal) => iyal))
        setShowChapterGroup(true)
      }else{
        setShowSection(false)
        setShowChapter(false)
        setShowKural(false)
      }
    } catch (error) {
      console.log(error)
    }
  });

  const renderChapters = (iyalNumber) => iyalList.map((iyal) => {
    try {
      if (iyal.number === iyalNumber) {
        setChapterList(iyal.chapters.detail.map((chapter) => chapter))
        setShowChapter(true)
      }else{
        setShowChapterGroup(false)
        setShowSection(false)
        setShowKural(false)
      }
    } catch (error) {
      console.log(error)
    }
  });

  const renderKurals = (chapterNumber) => chapterList.map((chapter) => {
    try {
      if (chapter.number === chapterNumber) {
        setKuralList({ start: chapter.start, end: chapter.end })
        setShowKural(true)
      }else{
        setShowSection(false)
        setShowChapterGroup(false)
        setShowChapter(false)
      }
    } catch (error) {
      console.log(error)
    }
  });
  const clickChapter = () => {

  }
  return (
    <>
      <BreadcrumbsItem glyph='home' to='/thirukkural/chaptergroup'>
        Chapters Group
      </BreadcrumbsItem>
      {showSection && <Row className="justify-content-center">
        <Col className="col-md-12 col-lg-12 mb-4">
          <Card className="card">
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>பால்கள் (Paalkal)</Card.Title>
              <Card.Subtitle className="mb-3 card-subtitle text-muted">Section</Card.Subtitle>
              <Row>
                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className='bg-label-info'>
                    <Card.Body>
                      <Card.Title className='card-title'>அறத்துப்பால் (Araththuppaal)</Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">Virtue</Card.Subtitle>
                      <p>அறம் (Aram) அறத்துப்பால் (Arathupal) திருக்குறளின் முப்பல்களில் முதற் 'பால்' ஆகும். அறம் பகுதி உரையில் திருவள்ளுவர் நல்வழி, ஒழுங்கு, தர்மம் போன்ற கருத்துக்களைக் குறிபிட்டுள்ளார். அறத்துப்பால் கீழ்காணும் இயல்களாக பகுகபட்டுள்ளன. (Arathupal)</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => renderIyalgal(1)} variant='info'>Read more...</Button>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className='bg-label-success'>
                    <Card.Body>
                      <Card.Title className='card-title'>பொருட்பால் (Porutpaal)</Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">Wealth</Card.Subtitle>
                      <p>பொருள் (Porul) பொருட்பால் (Porutpal) திருக்குறளின் முப்பல்களில் இரண்டாம் 'பால்' ஆகும். இவ்வுலகத்தில் உள்ள அனைத்தும் பொருட்களால் ஆனது. பொருள் அல்லது பொருட்பால் பகுதியை திருவள்ளுவர் கீழ்காணும் இயல்களாக பகுத்துள்ளார். (Porutpal)</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => renderIyalgal(2)} variant='success'>Read more...</Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col className="col-md-4 col-lg-4 mb-4">
                  <Card className='bg-label-warning'>
                    <Card.Body>
                      <Card.Title className='card-title'>காமத்துப்பால் (Kaamaththuppaal)</Card.Title>
                      <Card.Subtitle className="mb-3 card-subtitle text-muted">Love</Card.Subtitle>
                      <p>இன்பம் (Inbam) இன்பத்துப்பால் (Inbathupal) திருக்குறளின் மூன்றாம் 'பால்' ஆகும். இன்பம் பகுதி உரையில் திருவள்ளுவர் அன்பு, அறம், பொருள், வீடு என்ற வாழ்வின் நோக்கங்கள் பற்றிய கருத்துக்களை குறிபிட்டுள்ளார். இன்பத்துப்பால் கீழ்காணும் இயல்களாக பகுகபட்டுள்ளன. (Inbathupal)</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button onClick={() => renderIyalgal(3)} variant='warning'>Read more...</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>}
      {showChapterGroup &&
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 mb-4">
            <Card className="card">
              <Card.Body className='card-body'>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr class="info">
                      <th>#</th>
                      <th>Tamil</th>
                      <th>Transliteration</th>
                      <th>English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iyalList.map(iyal => {
                      return <tr>
                        <td>{iyal.number}</td>
                        <td><Button variant='link' onClick={() => { renderChapters(iyal.number) }}>{iyal.name}</Button> </td>
                        <td>{iyal.transliteration}</td>
                        <td>{iyal.translation}</td>
                      </tr>
                    })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      }

      {showChapter &&
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 mb-4">
            <Card className="card">
              <Card.Body className='card-body'>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr class="info">
                      <th>#</th>
                      <th>Tamil</th>
                      <th>Transliteration</th>
                      <th>English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapterList.map(chapter => {
                      return <tr>
                        <td>{chapter.number}</td>
                        <td><Button variant='link' onClick={() => { renderKurals(chapter.number) }}>{chapter.name}</Button> </td>
                        <td>{chapter.transliteration}</td>
                        <td>{chapter.translation}</td>
                      </tr>
                    })
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      }
      {showKural &&
        <KuralList kuralList={kuralList} />
      }
    </>
  )
}

export default ChapterGroup;