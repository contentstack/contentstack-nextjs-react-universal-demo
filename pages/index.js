// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index";
import Homepage from "../templates/Homepage"
class Home extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry('home');
      return { data: result[0][0] };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <Homepage page={this.props.data}/>
    );
  }
}

export default Home;
