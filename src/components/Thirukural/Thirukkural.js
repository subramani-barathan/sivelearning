import Palgal from './Palgal';
import Header from '../template/header/Header';
import LeftSidePanel from '../template/leftsidepanel/LeftSidePanel';

function Thirukkural() {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <LeftSidePanel />
                <div className="layout-page">
                    <Header />
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <Palgal />
                        </div>
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    )
}

export default Thirukkural;