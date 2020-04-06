import React from "react";
class Header extends React.Component {
  render() {
    const nav = this.props.header.nav_menu.link.map((item, index) => {
      return (
        <a href={item.href} key={index}>
          {item.title}
        </a>
      );
    });
    return (
        <header>
          <a className="logo" href="/">
            <span className="logo-text">
              <i className="fa fa-file-code-o" aria-hidden="true"></i>
              {this.props.header.logo_title}
            </span>
          </a>
          <nav className="nav-menu">{nav}</nav>
        </header>
    );
  }
}
export default Header;
