/**
 * Created by pradeep on 8/5/17.
 */
import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Footer extends React.Component {
    render() {
        const page = this.props.page

        return (
            <footer>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="s-share">
                    <ul>
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href=""><i className="fa fa-twitter"></i></a></li>
                        <li><a href=""><i className="fa fa-github"></i></a></li>
                        <li><a href=""><i className="fa fa-bitbucket"></i></a></li>
                    </ul>
                </div>
                <div className="copywrite">
                    <p>Copyright &copy; 2017 Built.io. All Rights Reserved.</p>
                </div>
                <style jsx>{`


            `}</style>
            </footer>
        )
    }
}