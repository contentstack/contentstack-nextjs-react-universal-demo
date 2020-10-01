/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React from 'react';
import Stack from '../sdk-plugins/index';
import Layout from "../components/layout";
import Aboutpage from '../templates/Aboutpage';

class About extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("about");

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
        <Aboutpage page={this.props.data.result[0][0]} />
      </Layout>
    );
  }
}

export default About;
