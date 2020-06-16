// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index.js";
import Blogpage from "../templates/Blogpage";
class Blogs extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("blogs");
      console.log(result);
      return { data: result[0][0] };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <Blogpage page={this.props.data} />;
  }
}

export default Blogs;
