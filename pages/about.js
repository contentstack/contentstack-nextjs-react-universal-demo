// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index";
import Aboutpage from "../templates/Aboutpage";
class About extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("next_about");
      return { data: result[0][0] };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <Aboutpage page={this.props.data} />;
  }
}

export default About;
