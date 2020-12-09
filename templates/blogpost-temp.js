/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";

const { Carousel } = require("react-responsive-carousel");

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${mm}-${dd}-${yy}`;
}

class BlogTemplate extends React.Component {
  render() {
    const result = this.props.page;
    function createContent(data, idx) {
      return <div key={idx} dangerouslySetInnerHTML={{ __html: data }} />;
    }
    function createCarousel(images, id) {
      return (
        <div style={{ padding: "12px 12px" }} key={id}>
          <h2 className="sliderTitle"> Slide Show</h2>
          <Carousel
            showArrows
            showThumbs={false}
            infiniteLoop
            thumbWidth="200px"
            showArrows
          >
            {images.map((img, idx) => (
              <div key={idx} height="200px" width="200px">
                <img
                  src={img.image.url}
                  alt={img.image.filename}
                  width="200px"
                  height="350px"
                />
                <div className="subcriptionLink legend" style={{ background: "transparent", opacity: "1" }}>
                  {img.link.map((li, key) => (
                    <a
                      href={li.url}
                      className="button1 bouncy"
                      key={key}
                      style={{ animationDelay: `${key * 0.07}s` }}
                    >
                      {li.title}
                    </a>
                  ))}
                </div>
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
        <div key={idx} className="socialNetworl">
          <h2 className="socialTitle"> Social Network</h2>
          <div
            className="embededCodes"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      );
    }
    return (
      <div className="blogListcontainer">
        <div className="heroBanner">
          <ul>
            <li>
              <img
                className="bannerImage"
                src={result.hero_banner.banner_image.url}
                alt={result.hero_banner.banner_image.filename}
                height="550px"
              />
              <div className="bannerContent">
                <h1>{result.title}</h1>
                <div>
                  <span className="blogPostTimeStamp">
                    {dateSetter(result.publish_date)}
                  </span>
                  ,
                  <span className="blogpost-author">
                    {result.author[0].title}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="blogContent">
          {result.blog_body.map(post => Object.entries(post).map((data, idx) => {
            if (data[0] === "rich_text_editor" && data[1] !== null) {
              return createContent(data[1].rich_text, idx);
            }
            if (data[0] === "image_carousel" && data[1] !== null) {
              return createCarousel(data[1].images, idx);
            }
            if (data[0] === "quotes" && data[1] !== null) {
              return createQuotes(data[1].quote, idx);
            }
            if (data[0] === "social_network_embed" && data[1] !== null) {
              return createSocialNetwork(data[1].embed_code, idx);
            }
          }))}
        </div>
      </div>
    );
  }
}
export default BlogTemplate;
