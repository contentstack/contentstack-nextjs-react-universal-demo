/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
    function metaData(seo) {
      let metaArr = [];
      for (const key in seo) {
        metaArr.push(
          <meta name={key.split("meta_")[1]} content={seo[key]} key={key} />,
        );
      }
      return metaArr;
    }
    return (
      <div id="asdf4534">
        <Head>
          <title>CS Nextjs Website</title>
          <link
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            type="text/css"
            rel="stylesheet"
          />
          {this.props.seo ? metaData(this.props.seo) : null}
        </Head>
        {this.props.header ? <Header header={this.props.header} /> : ""}
        <main>{this.props.children}</main>
        {this.props.footer ? <Footer footer={this.props.footer} /> : ""}

        <style jsx>
          {`
            body {
              font-family: "Open Sans", sans-serif;
            }
            #asdf4534 {
              width: 100%;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Layout;
