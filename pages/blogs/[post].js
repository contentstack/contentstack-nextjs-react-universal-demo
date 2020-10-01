/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-throw-literal */
/* eslint-disable import/extensions */
import React from "react";
import Stack from "../../sdk-plugins/index.js";
import Layout from "../../components/layout";
import BlogTemplate from "../../templates/blogpost-temp.js";

class BlogPosts extends React.Component {
  static async getInitialProps({ query }) {
    const postLink = query.post;
    try {
      if (postLink === "/blog-list") throw "404";
      const result = await Stack.getEntry("blog_posts");

      const header = await Stack.getEntry("header");
      const footer = await Stack.getEntry("footer");
      // return { data: { result, header, footer } };
      let data = result[0];
      data = data.filter(obj => obj.url === `/${postLink}`);
      if (data.length === 0) throw "404";
      return {
        data: {
          result: data[0],
          header,
          footer,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout
        header={this.props.data.header[0][0]}
        footer={this.props.data.footer[0][0]}
      >
        <BlogTemplate page={this.props.data.result} />
      </Layout>
    );
  }
}
export default BlogPosts;
