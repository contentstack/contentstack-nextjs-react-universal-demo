/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Layout from "../components/layout.js";

const { Carousel } = require("react-responsive-carousel");

class BlogTemplate extends React.Component {
  render() {
    const { result } = this.props.page;
    function createContent(data, idx) {
      return <div key={idx} dangerouslySetInnerHTML={{ __html: data }} />;
    }
    function createCarousel(images, id) {
      return (
        <div style={{ padding: '12px 12px' }} key={id}>
          <h2 className="sliderTitle"> Slide Show</h2>
          <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            thumbWidth="200px"
            showArrows
          >
            {images.map((image, idx) => (
              <div key={idx} height="200px" width="200px">
                <img
                  src={image.url}
                  alt={image.filename}
                  width="200px"
                  height="350px"
                />
              </div>
            ))}
          </Carousel>
        </div>
      );
    }
    function createQuotes(data, idx) {
      return (
        <div className="blogQuotes" key={idx}>
          <h2 className="quotezTitle"> Quotes</h2>
          <blockquote
            className="otroBlockquote"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      );
    }
    function createSocialNetwork(data, idx) {
      return (
        <div key={idx}>
          <h2 className="socialTitle"> Social Network</h2>
          <div
            className="embededCodes"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
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
              post => Object.entries(post).map((data, idx) => {
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
              }),
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
export default BlogTemplate;
