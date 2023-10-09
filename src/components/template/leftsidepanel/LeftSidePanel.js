function LeftSidePanel() {

    return (        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
    <div className="app-brand demo">
      <a href="/" className="app-brand-link">
        <span className="app-brand-logo demo">
          
        </span>
        <h1 className="app-brand-text demo menu-text fw-bolder ms-2">Smart Learning</h1>
      </a>

      <a href="/" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i className="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <div className="menu-inner-shadow"></div>

    <ul className="menu-inner py-1">
    <li className="menu-header small text-uppercase">
        <span className="menu-header-text">Thirukkural</span>
      </li>
      <li className="menu-item active">
        <a href="/thirukkural" className="menu-link">
          <i className="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Thirukkural</div>
        </a>
      </li>

      <li className="menu-item">
        <a href="/" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">Layouts</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a href="layouts-without-menu.html" className="menu-link">
              <div data-i18n="Without menu">Without menu</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-without-navbar.html" className="menu-link">
              <div data-i18n="Without navbar">Without navbar</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-container.html" className="menu-link">
              <div data-i18n="Container">Container</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-fluid.html" className="menu-link">
              <div data-i18n="Fluid">Fluid</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-blank.html" className="menu-link">
              <div data-i18n="Blank">Blank</div>
            </a>
          </li>
        </ul>
      </li>
     </ul>
  </aside>
  )
}

export default LeftSidePanel;