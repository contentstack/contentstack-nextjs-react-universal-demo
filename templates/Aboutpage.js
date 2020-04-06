import React from "react";
import Layout from "../components/layout";
class Aboutpage extends React.Component {
  render() {
    const aboutSec = this.props.page.about.about_content.map(
      (aboutSec, index) => {
        return (
          <div className="thumbnail-bx clearfix" key={index}>
            <div className="about-content-left">
              <img src={aboutSec.image.url} />
            </div>
            <ul className="about-content-right">
              <li>
                <h3>{aboutSec.title}</h3>
                <p>{aboutSec.description}</p>
                {/* <button
                  className="btn"
                  style={{
                    backgroundColor: " #008CBA",
                    borderRadius: "10px",
                    transitionDuration: " 0.4s",
                    fontSize: "16px",
                    
                  }}
                > */}
                  <a to={aboutSec.cta.href}>{aboutSec.cta.title}</a>
                {/* </button> */}
              </li>
            </ul>
          </div>
        );
      }
    );
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <div className="about-page">
          <div id="" className="center head">
            <h1>{this.props.page.title}</h1>
          </div>
          <div className="thumbnail-content">
            <div className="">{aboutSec}</div>
            <div className="clearfix"></div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Aboutpage;
