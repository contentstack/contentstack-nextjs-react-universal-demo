import React from 'react'
import Homepage from '../templates/home'
export default class Home extends React.Component {
  static async getInitialProps () {
      const data = new Promise(resolve => {
          var  Query = Stack.ContentType("home").Query()
              .includeReference('reference_header','reference_footer')
              .toJSON()
              .find()
              .then(function success(result) {
                  resolve(result);
              }, function error(error) {

              });
      })
      return data;
    }
  render () {
    const page = this.props[0];
    return <Homepage page={page}/>

  }
}