import React from "react";
import Layout from "../components/layout";
class Contactpage extends React.Component {
  render() {
    return (
      <Layout
        header={this.props.page.reference_header[0]}
        footer={this.props.page.reference_footer[0]}
      >
        <div className="contactUs">
          <div className="contactUsPage">
            <div >
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
      </Layout>
    );
  }
}
export default Contactpage;
