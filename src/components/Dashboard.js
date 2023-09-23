import Header from './template/header/Header';
import LeftSidePanel from './template/leftsidepanel/LeftSidePanel';
import TaBreadcrumb from './template/breadcrumb/Breadcrumb';

function Dashboard() {
    return (<div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
            <LeftSidePanel />
            <div className="layout-page">
                <Header />
                <TaBreadcrumb/>
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                    </div>
                    <div className="content-backdrop fade"></div>
                </div>
            </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    )
}

export default Dashboard;