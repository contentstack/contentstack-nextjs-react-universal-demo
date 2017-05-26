import React from 'react'
import homestyle from '../styles/home-style'
import Layout from '../partials/MyLayout'
export default class Contact extends React.Component {
    render() {
        const page = this.props.page[0];
        const header = page.reference_header[0];
        const footer = page.reference_footer[0];

        const footerNav = footer.nav_links.link.map((item, index) => {
            return(
                <a href={item.href} key={index}>{item.title}</a>
            )
        });

        const socialShare = footer.social_share.map((item, index) => {
            return(
                <li key={index}><a href={item.link.href}><i className={'fa '+ (item.icon_class)}></i></a></li>
            )
        });

        const nav = header.nav_menu.link.map((item, index) => {
            return (
                <a href={item.href} key={index}>{item.title}</a>
            )
        });

        return (
            <Layout>
                <header>
                    <a className="logo" href="/">
                        <span className="logo-text"><i className="fa fa-file-code-o" aria-hidden="true"></i> {header.logo_title}</span>
                    </a>
                    <nav className="nav-menu">
                        {nav}
                    </nav>
                </header>
                <div className="contact-us">
                    <main>
                        <style dangerouslySetInnerHTML={{ __html: homestyle }}/>
                        <div className="contact-us-page">
                            <div id="">
                                <h1>{page.title}</h1>
                            </div>
                            <div className="address">
                                <h2>{page.contact_details.address}</h2>
                                <h2>{page.contact_details.phone}</h2>
                                <h2 className="email-id"><a href="#">{page.contact_details.email}</a></h2>
                            </div>
                        </div>
                    </main>
                </div>
                <footer>
                    <div className="links">
                        {footerNav}
                    </div>
                    <div className="s-share">
                        <ul>
                            {socialShare}
                        </ul>
                    </div>
                    <div className="copywrite">
                        <div dangerouslySetInnerHTML={{__html: footer.copywrite}} />
                    </div>
                </footer>
            </Layout>
        )
    }
}
