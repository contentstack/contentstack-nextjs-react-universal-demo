/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React from "react";
import Stack from "../sdk-plugins/index";
import Contactpage from "../templates/Contactpage";

class Contact extends React.Component {
  static async getInitialProps() {
    try {
      const result = await Stack.getEntry("contact");
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
