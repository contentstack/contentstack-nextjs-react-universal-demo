import React from "react";
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;
import Layout from "../components/layout";
class Blogpage extends React.Component {
  render() {
    const renderCarousel = function (page) {
      return page.blog_carousel.map((image, idx) => {
        if (image.hasOwnProperty("carousel_image_1")) {
          return (
            <div key={idx} height="200px" width="200px">
              <img
                src={image.carousel_image_1.file.url}
                alt={image.carousel_image_1.file.filename}
                width="200px"
                height="350px"
              />
              <div className="carousel-title-div">
                <h4 className="carousel-title">
                 <strong>{image.carousel_image_1.single_line}</strong> 
                </h4>
              </div>
              <p className="carousel-description">{image.carousel_image_1.multi_line}</p>
            </div>
          );
        } else {
          return (
            <div key={idx} height="200px" width="200px">
              <img
                src={image.carousel_image_2.file.url}
                alt={image.carousel_image_2.file.filename}
                width="200px"
                height="350px"
              />
              <div className="carousel-title-div">
                <h4 className="carousel-title">
                  <strong>
                  {image.carousel_image_2.single_line}
                  </strong>
                </h4>
              </div>
            </div>
          );
        }
      });
    };
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          thumbWidth="200px"
          showArrows={true}
        >
          {renderCarousel(this.props.page)}
        </Carousel>
        <div className="wrap">
          <div className="main-container">
            <div className="blog-post">
              <h1 className="blog-title">{this.props.page.title}</h1>
            </div>
            <div className="blog-content">
              {this.props.page.blog_body.map((elm, id) => {
                if (elm.hasOwnProperty("blog_content_rte")) {
                  return (
                    <div key={id}>
                      <h2 className="blogpost-title">
                        {elm.blog_content_rte.single_line}
                      </h2>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: elm.blog_content_rte.rich_text_editor,
                        }}
                      ></div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="blogger-details">
              <h3 className="blog-details-title">Relative Blogs</h3>
              {this.props.page.blog_body.map((element, id) => {
                if (element.hasOwnProperty("other_blogger_post")) {
                  return (
                    <div className="card" key={id}>
                      <img
                        className="cardImg"
                        src={element.other_blogger_post.file.url}
                        alt={element.other_blogger_post.file.filename}
                        style={{ width: "100%", height: "200px" }}
                      />
                      <div className="cardContainer">
                        <h4>
                          <strong>{element.other_blogger_post.single_line}</strong>
                        </h4>
                        <p>{element.other_blogger_post.multi_line}</p>
                        <a href={element.other_blogger_post.link.href} className="blog-post-a">
                          {element.other_blogger_post.link.title}
                        </a>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Blogpage;
