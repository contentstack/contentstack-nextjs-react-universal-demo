// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index.js";
import Blogpage from "../templates/Blogpage";
class Blogs extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("blog_posts");
      let data = result[0].filter((obj) => obj.url === "/blog-list");

      return {
        data: {
          result: data[0],
        },
      };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <Blogpage page={this.props.data} />;
  }
}

export default Blogs;
