/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
import React from "react";
import Layout from "../components/layout";

class Aboutpage extends React.Component {
  render() {
    const aboutSec = this.props.page.about.about_content.map(
      (aboutSec, index) => (
        <div className="thumbnailBx clearfix" key={index}>
          <div className="aboutContentLeft">
            <img src={aboutSec.image.url} alt={aboutSec.image.filename} />
          </div>
          <ul className="aboutContentRight">
            <li>
              <h3>{aboutSec.title}</h3>
              <p>{aboutSec.description}</p>
              <a to={aboutSec.cta.href} className="ctaLink">{aboutSec.cta.title}</a>

            </li>
          </ul>
        </div>
      ),
    );
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <div className="aboutPage">
          <div id="" className="center head">
            <h1>{this.props.page.title}</h1>
          </div>
          <div className="thumbnailContent">
            <div className="">{aboutSec}</div>
            <div className="clearfix" />
          </div>
        </div>
      </Layout>
    );
  }
}
export default Aboutpage;
