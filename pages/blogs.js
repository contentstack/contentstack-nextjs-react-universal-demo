/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
// import Head from "next/head";
import React from "react";
import Stack from '../sdk-plugins/index.js';
import Layout from "../components/layout";
import Blogpage from "../templates/Blogpage";

class Blogs extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("blog_posts");
      const blogs = await Stack.getEntry('blogs');
      const header = await Stack.getEntry('header');
      const footer = await Stack.getEntry('footer');
      const allposts = result[0].filter(obj => obj.url !== "/blog-list");

      return {
        data: {
          header, footer, blogs, allpost: allposts,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout header={this.props.data.header[0][0]} footer={this.props.data.footer[0][0]}>
        <Blogpage
          blogs={this.props.data.blogs[0][0]}
          allpost={this.props.data.allpost}
        />
      </Layout>
    );
  }
}

export default Blogs;
