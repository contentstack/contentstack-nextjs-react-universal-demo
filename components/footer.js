/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from "react";

class Footer extends React.Component {
  render() {
    const footerNav = this.props.footer.nav_links.link.map((item, index) => (
      <a href={item.href} key={index}>
        {item.title}
      </a>
    ));

    const socialShare = this.props.footer.social_share.map((item, index) => (
      <li key={index}>
        <a href={item.link.href}>
          <i className={`fa ${item.icon_class}`} />
        </a>
      </li>
    ));
    return (
      <footer>
        <div className="links">{footerNav}</div>
        <div className="s-share">
          <ul>{socialShare}</ul>
        </div>
        <div className="copywrite">
          <div dangerouslySetInnerHTML={{ __html: this.props.footer.copywrite }} />
        </div>
      </footer>
    );
  }
}
export default Footer;
