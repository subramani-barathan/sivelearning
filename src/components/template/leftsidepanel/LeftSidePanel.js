import { useState } from "react";
import Menu from "../../../json/menu.json"
import { Link } from "react-router-dom";

function LeftSidePanel() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [menuId, setMenuId] = useState("");
  const clickMenuItem =  (menuItem) => {
     Menu.map((menu) => {
      if (menu.id === menuItem) {
        setMenuId(menu.id)
        setShowSubMenu(!showSubMenu);
      } else {
        if (showSubMenu)
          setShowSubMenu(false);
      }
    });
  }

  return (<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
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
      {
        Menu.map((menu) => {
          return <>
            {menu.header && <li className={`menu-header small text-uppercase ${menu.id}`} key={menu.id}>
              <span className="menu-header-text">{menu.text}</span>
            </li>}
            {menu.menu.length === 0 && !menu.header && <li className={`menu-item ${menu.id}`} key={menu.id}>
              <Link to={menu.link} className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n={menu.text}>{menu.text}</div>
              </Link>
            </li>}
            {!menu.header && <>
              {menu.menu.length > 0 &&
                <li className={`menu-item${showSubMenu && menuId === menu.id ? " open" : ""} ${menu.id}`} key={menu.id}>
                  <span onClick={() => clickMenuItem(menu.id)} className="menu-link menu-toggle">
                    <i className="menu-icon tf-icons bx bx-layout"></i>
                    <div data-i18n="Layouts">{menu.text}</div>
                  </span>

                  <ul className="menu-sub">
                    {
                      menu.menu.map((submenu) => {
                        return <li className="menu-item" key={submenu.id}>
                          <Link to={submenu.link} className="menu-link">
                            <div data-i18n="Without menu">{submenu.text}</div>
                          </Link>
                        </li>
                      })
                    }
                  </ul>
                </li>
              }
            </>
            }
          </>
        })
      }
    </ul >
  </aside>
  )
}

export default LeftSidePanel;