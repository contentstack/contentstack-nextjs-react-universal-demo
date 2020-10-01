/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

class Contactpage extends React.Component {
  render() {
    return (
      <div className="contactUs">
        <div className="contactUsPage">
          <div>
            <h1>{this.props.page.title}</h1>
          </div>
          <div className="address">
            <h2>{this.props.page.contact_details.address}</h2>
            <h2>{this.props.page.contact_details.phone}</h2>
            <h2 className="emailId">
              <a href="#">{this.props.page.contact_details.email}</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Contactpage;
