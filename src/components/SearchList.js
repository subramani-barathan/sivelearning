import KuralAccordian from "../components/Thirukural/KuralAccordian";
import { Row } from "react-bootstrap";

function SearchList(props) {
  return (
        <Row className="container-xxl mb-4 search-list">
          {props.kural.map((kural) => (
            <KuralAccordian kural={kural} key={kural.Number} />
          ))}
        </Row>
  );
}
export default SearchList;
