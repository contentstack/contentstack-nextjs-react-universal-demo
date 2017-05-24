import React from 'react'
import Homepage from '../templates/home'
export default class Home extends React.Component {
  static async getInitialProps () {
      const data = new Promise(resolve => {
          var  Query = Stack.ContentType("home").Entry("bltb5557cb8bc95fe6c")
              .includeReference('reference_header','reference_footer')
              .toJSON()
              .fetch()
              .then(function success(result) {
                  resolve(result);
              }, function error(error) {

              });
      })
      return data;
    }
  render () {
    const page = this.props;
    return <Homepage page={page}/>

  }
}