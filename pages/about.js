/**
 * Created by pradeep on 12/5/17.
 */
import React from 'react'
import Aboutpage from '../templates/about'
export default class About extends React.Component {
    static async getInitialProps () {
        const data = new Promise(resolve => {
            var  Query = Stack.ContentType("about").Entry("bltbebc90922e152d39")
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
        return <Aboutpage page={page}/>
    }
}