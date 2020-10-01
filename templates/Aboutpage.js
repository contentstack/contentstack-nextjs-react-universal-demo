/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
import React from "react";

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
              <h2>{aboutSec.title}</h2>
              <p>{aboutSec.description}</p>
              <a href={aboutSec.cta.href} className="ctaLink">
                {aboutSec.cta.title}
              </a>
            </li>
          </ul>
        </div>
      ),
    );
    return (
      <div className="aboutPage">
        <div id="" className="center head">
          <h1>{this.props.page.title}</h1>
        </div>
        <div className="thumbnailContent">
          <div className="">{aboutSec}</div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
export default Aboutpage;
