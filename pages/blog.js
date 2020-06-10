// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index";
import Blogpage from "../templates/Blogpage";
class Blog extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("next_blog");
      return { data: result[0][0] };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <Blogpage page={this.props.data} />;
  }
}

export default Blog;
