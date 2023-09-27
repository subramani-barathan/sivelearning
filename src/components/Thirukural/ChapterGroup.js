import { Button, Col, Row, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ThirukkuralDetails from '../../json/detail.json'
import { useState,useContext, useEffect } from 'react';
import KuralList from './Kural';
import { BreadcrumbsItem } from '../template/breadcrumb/BreadcrumbDetails';
import { KuralContext } from '../contexts/KuralContext';

function ChapterGroup() {
  const [iyalList, setIyalList] = useState();
  const [chapterList, setChapterList] = useState();
  const [kuralList, setKuralList] = useState();
  const value = useContext(KuralContext);
 
  const renderIyalgal = (paalNumber) => ThirukkuralDetails.section.detail.map((paal) => {
    try {
      if (paal.number === paalNumber) 
        setIyalList(paal.chapterGroup.detail.map((iyal) => iyal))
    } catch (error) {
      console.log(error)
    }
  });


  const renderChapters = (iyalNumber) => iyalList.map((iyal) => {
    try {
      if (iyal.number === iyalNumber) 
        setChapterList(iyal.chapters.detail.map((chapter) => chapter))
      
    } catch (error) {
      console.log(error)
    }
  });

  const renderKurals = (chapterNumber) => chapterList.map((chapter) => {
    try {
      if (chapter.number === chapterNumber) 
        setKuralList({ start: chapter.start, end: chapter.end })
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <>
    <KuralContext.Consumer>
      <BreadcrumbsItem glyph='home' to='/thirukkural/chaptergroup'>
        Chapters Group
      </BreadcrumbsItem>
      {console.log(value)}
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
        </KuralContext.Consumer>
        </> 
  )
}

export default ChapterGroup;