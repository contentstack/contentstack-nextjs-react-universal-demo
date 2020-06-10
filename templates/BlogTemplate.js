import React from "react";
import Layout from "../components/layout.js";
class BlogTemplate extends React.Component {
  render() {
    return (
      <Layout header={this.props.page.header} footer={this.props.page.footer}>
        <div className="single-blog-post">
          <div className="container">
            <div className="blog-heading">
              <h2>{this.props.page.result.blogs.title}</h2>
            </div>
            <div className="row justify-content-md-center blog_body">
              <div
                className="col col-lg-8 blog-biref-description"
                dangerouslySetInnerHTML={{
                  __html: this.props.page.result.blogs.brief_description,
                }}
              ></div>
              <div className="col col-lg-2 blog-images-display">
                {this.props.page.result.blogs.blog_image.map((images, id) => {
                  return (
                    <img
                      src={images.url}
                      alt={images.filename}
                      width="300px"
                      height="300px"
                      style={{ borderRadius: "12%" }}
                      key={id}
                    />
                  );
                })}
              </div>
              <div className="row author-section">
                <h3>About Author</h3>
                {this.props.page.result.blogs.about_authors.map(
                  (author, key) => {
                    return (
                      <div className="col-5 author-details" key={key}>
                        <div className="display-author-details">
                          <img
                            src={author.authors.author_image.url}
                            alt={author.authors.author_image.filename}
                            style={{ width: "100px" }}
                          />
                          <p className="about-author">
                            {author.authors.author_s_details}
                          </p>
                          <div
                            className="author-social-links"
                            style={{ margin: "24px 0" }}
                            dangerouslySetInnerHTML={{
                              __html:
                                author.authors.support_your_blogger[0].support
                                  .links_to_social,
                            }}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default BlogTemplate;
