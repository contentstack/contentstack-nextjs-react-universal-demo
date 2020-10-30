/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index";
import Layout from "../components/layout";
import Homepage from "../templates/Homepage";


class Home extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry('home', "en-us");
      const header = await Stack.getEntry('header', "en-us");
      const footer = await Stack.getEntry('footer', "en-us");
      return { data: { result, header, footer } };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout
        header={this.props.data.header[0][0]}
        footer={this.props.data.footer[0][0]}
        seo={this.props.data.result[0][0].seo}
      >
        <Homepage page={this.props.data.result[0][0]} />
      </Layout>
    );
  }
}

export default Home;
