import React from "react";
import Layout from "../components/layout";
class Blogpage extends React.Component {

  render() {
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <div className="wrap">
          <div className="main-container">
            <div className="blog-post">
              <h2 style={{"marginLeft": "5%"}}>{this.props.page.title}</h2>
              <div className="container">
                {this.props.page.display_blogs.map((blog, idx) => {
                  return (
                    <div className="row main-blog-div" key={idx}>
                      <img
                        className="card-img-top"
                        src={blog.blogs.blog_image[0].url}
                        alt={blog.blogs.blog_image[0].filename}
                        height="150px"
                        width="150px"
                        style={{"borderRadius": "50%","display": "inlineBlock"}}
                      />
                      <h4 className="blog-title">{blog.blogs.title}</h4>
                      <p className="blog-summary">{blog.blogs.summary}}</p>
                      <a
                        href={"/blog"+blog.blogs.readmore.href}
                        className="blog-directive"
                      >
                        read more...
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Blogpage;
