// import Head from "next/head";
import React from "react";
import Stack from "../sdk-plugins/index";
import Contactpage from "../templates/Contactpage";
class Contact extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("next_contact");
      return { data: result[0][0] };
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <Contactpage page={this.props.data} />;
  }
}

export default Contact;
