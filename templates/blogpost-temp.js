import React from "react";
import Layout from "../components/layout.js";
var Carousel = require("react-responsive-carousel").Carousel;

class BlogTemplate extends React.Component {
  render() {
    let result = this.props.page.result;
    function createContent(data, idx) {
      return <div key={idx} dangerouslySetInnerHTML={{ __html: data }}></div>;
    }
    function createCarousel(images, id) {
      return (
          <div style={{padding: '12px 12px'}} key={id}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          thumbWidth="200px"
          showArrows={true}
        >
          {images.map((image, idx) => {
            return (
              <div key={idx} height="200px" width="200px">
                <img
                  src={image.url}
                  alt={image.filename}
                  width="200px"
                  height="350px"
                />
              </div>
            );
          })}
        </Carousel>
        </div>
      );
    }
    function createQuotes(data, idx) {
      return (
        <div className="blogQuotes" key={idx}>
          <blockquote
            className="otroBlockquote"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      );
    }
    function createSocialNetwork(data, idx) {
      return (
        <div
          className="embededCodes"
          key={idx}
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
      );
    }

    return (
      <Layout
        header={this.props.page.result.reference_header[0]}
        footer={this.props.page.result.reference_footer[0]}
      >
        <div className="blogListcontainer">
          <div className="heroBanner">
            <img
              className="bannerImage"
              src={result.hero_banner[0].banner_title_only.image.url}
              alt={result.hero_banner[0].banner_title_only.image.filename}
              height="550px"
            />
          </div>
          <div className="blogContent">
            <h2 className="blogTitle">{result.title}</h2>
            {result.modular_blocks[0].blog_post_page.blog_post.map(
              (post, id) => {
                return Object.entries(post).map((data, idx) => {
                  if (data[0] === "blog_content" && data[1] !== null) {
                    return createContent(data[1].blog_post_content, idx);
                  }
                  if (data[0] === "image_carousel" && data[1] !== null) {
                    return createCarousel(data[1].image, idx);
                  }
                  if (data[0] === "blog_quotes" && data[1] !== null) {
                    return createQuotes(data[1].quote, idx);
                  }
                  if (data[0] === "social_network_embed" && data[1] !== null) {
                    return createSocialNetwork(data[1].embed_code, idx);
                  }
                });
              }
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
export default BlogTemplate;
