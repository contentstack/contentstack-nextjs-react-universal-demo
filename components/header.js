/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";

class Header extends React.Component {
  render() {
    const nav = this.props.header.nav_menu.link.map((item, index) => (
      <a href={item.href} key={index}>
        {item.title}
      </a>
    ));
    return (
      <header>
        <a className="logo" href="/">
          <span className="logoText">
            <i className="fa fa-file-code-o" aria-hidden="true" />
            <span className="logoTitle">{this.props.header.logo_title}</span>
          </span>
        </a>
        <nav className="navMenu">{nav}</nav>
      </header>
    );
  }
}
export default Header;
