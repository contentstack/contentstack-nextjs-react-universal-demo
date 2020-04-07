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
              <img src={this.props.header.logo_image.url} alt={this.props.header.logo_image.filename} style={{height:"50px"}}/>
              <span>{this.props.header.logo_title}</span>
            </span>
          </a>
          <nav className="nav-menu">{nav}</nav>
        </header>
    );
  }
}
export default Header;
