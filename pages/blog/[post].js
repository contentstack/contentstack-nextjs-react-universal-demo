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
      const result = await Stack.getSpecificEntryWihtRef(
        "blog_posts",
        `/blog/${postLink}`,
        'author',
        "en-us",
      );

      const header = await Stack.getEntry("header", "en-us");
      const footer = await Stack.getEntry("footer", "en-us");
      return {
        data: {
          result: result[0],
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
        seo={this.props.data.result.seo}
      >
        <BlogTemplate page={this.props.data.result} />
      </Layout>
    );
  }
}
export default BlogPosts;
