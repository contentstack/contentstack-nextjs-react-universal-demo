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
      const result = await Stack.getEntry("blog_posts", "en-us");
      const blogs = await Stack.getEntry('blogs', "en-us");
      const header = await Stack.getEntry('header', "en-us");
      const footer = await Stack.getEntry('footer', "en-us");

      return {
        data: {
          header, footer, blogs, allpost: result[0],
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
        seo={this.props.data.blogs[0][0].seo}
      >
        <Blogpage
          blogs={this.props.data.blogs[0][0]}
          allpost={this.props.data.allpost}

        />
      </Layout>
    );
  }
}

export default Blogs;
