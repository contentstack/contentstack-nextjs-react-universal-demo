/**
 * Created by pradeep on 12/5/17.
 */
import React from 'react'
import Contactpage from '../templates/contact'
export default class Contact extends React.Component {
    static async getInitialProps () {
        const data = new Promise(resolve => {
            var  Query = Stack.ContentType("contact").Entry("blta5b25d8cf1b77867")
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
        return <Contactpage page={page}/>
    }
}