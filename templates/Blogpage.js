/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${mm}-${dd}-${yy}`;
}

class Blogpage extends React.Component {
  render() {
    const data = this.props.allpost;
    return (
      <div className="blogListcontainer">
        <div className="heroBanner">
          <ul>
            <li>
              <img
                className="bannerImage"
                src={this.props.blogs.hero_banner[0].banner_image.url}
                alt={this.props.blogs.hero_banner[0].banner_image.filename}
              />
              <div className="bannerContent">
                <h1>Blog Lists</h1>
              </div>
            </li>
          </ul>
        </div>
        <div className="bloglistContainer">
          {data.map((list, idx) => (idx % 2 === 0 ? (
            <div className="bloglist" key={idx}>
              <div className="leftSection">
                <div>
                  <img
                    className="listImages"
                    src={list.hero_banner.banner_image.url}
                    alt={list.hero_banner.banner_image.filename}
                  />
                </div>
              </div>
              <div className="rightSection">
                <h2>{list.title}</h2>
                <div>
                  <span className="timeStamp">
                    {dateSetter(list.publish_date)}
                  </span>
                  ,
                  <span className="post-author">
                    {list.author[0].title}
                  </span>
                </div>
                <p className="blogPost">
                  {`${list.blog_body[0].rich_text_editor.rich_text.slice(
                    3,
                    150,
                  )}...`}
                </p>
                <a className="postLink" href={`${list.url}`}>
                  Read More
                </a>
              </div>
            </div>
          ) : (
            <div className="bloglist" key={idx}>
              <div className="leftSection">
                <h2>{list.title}</h2>
                <div>
                  <span className="timeStamp">
                    {dateSetter(list.publish_date)}
                  </span>
                  ,
                  <span className="post-author">
                    {list.author[0].title}
                  </span>
                </div>
                <p className="blogPost">
                  {`${list.blog_body[0].rich_text_editor.rich_text.slice(
                    3,
                    150,
                  )}...`}
                </p>
                <a className="postLink" href={`${list.url}`}>
                  Read More
                </a>
              </div>
              <div className="rightSection">
                <div>
                  <img
                    className="listImages"
                    src={list.hero_banner.banner_image.url}
                    alt={list.hero_banner.banner_image.filename}
                  />
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>
    );
  }
}
export default Blogpage;
