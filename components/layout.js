/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component {
  render() {
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
        </Head>
        <Header header={this.props.header} />
        <main>{this.props.children}</main>
        <Footer footer={this.props.footer} />

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
