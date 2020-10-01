/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React from "react";
import Stack from "../sdk-plugins/index";
import Layout from "../components/layout";
import Contactpage from "../templates/Contactpage";

class Contact extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("contact");
      const header = await Stack.getEntry('header');
      const footer = await Stack.getEntry('footer');
      return { data: { result, header, footer } };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout header={this.props.data.header[0][0]} footer={this.props.data.footer[0][0]}>
        <Contactpage page={this.props.data.result[0][0]} />
      </Layout>
    );
  }
}

export default Contact;
