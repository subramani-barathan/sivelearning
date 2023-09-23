import Breadcrumb from 'react-bootstrap/Breadcrumb';

function TaBreadcrumb() {
    return (
        <div className="container-xxl my-3">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Section</Breadcrumb.Item>
        </Breadcrumb>
        </div>
      );
}
export default TaBreadcrumb;