/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
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
      let result = await Stack.getEntryWithRef("blog_posts", 'author', "en-us");
      const blogs = await Stack.getEntry('blogs', "en-us");
      const header = await Stack.getEntry('header', "en-us");
      const footer = await Stack.getEntry('footer', "en-us");
      result = result.sort((prev, next) => prev.publish_date - next.publish_date);
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
