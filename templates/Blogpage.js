import React from "react";
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;
import Layout from "../components/layout";
class Blogpage extends React.Component {
  render() {
    let data = this.props.page.result
    return (
      <Layout
        header={this.props.page.result.reference_header[0]}
        footer={this.props.page.result.reference_footer[0]}
      >
        <div className="blogListcontainer">
          <div className="heroBanner">
            <img
              className="bannerImage"
              src={data.hero_banner[0].banner_title_only.image.url}
              alt={data.hero_banner[0].banner_title_only.image.filename}
            />
          </div>
          <h2 className="blogTitle">Blog List</h2>
          <div className="bloglistContainer">
            {data.modular_blocks.map((list, idx) => {
              return (
                <div className="bloglist" key={idx}>
                  <div className="leftSection">
                    <div>
                      <img
                        className="listImages"
                        src={list.blog_list.blog_image.url}
                        alt={list.blog_list.blog_image.filename}
                      />
                    </div>{" "}
                  </div>
                  <div className="rightSection">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: list.blog_list.blog_details,
                      }}
                    ></div>{" "}
                    <a className="postLink" href={'/blogs'+ list.blog_list.cta.href}>
                      {list.blog_list.cta.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
export default Blogpage;
