import React from 'react'
import homestyle from '../styles/home-style'
import Layout from '../partials/MyLayout'
export default class About extends React.Component {
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

        const aboutSec = page.about.about_content.map((aboutSec, index) =>{
            return (
                <div className="thumbnail-bx clearfix" key={index}>
                    <div className="about-content-left">
                        <img src={aboutSec.image.url} />
                    </div>
                    <ul className="about-content-right">
                        <li>
                            <h3>{aboutSec.title}</h3>
                            <p>{aboutSec.description}</p>
                        </li>
                    </ul>
                </div>
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
                <div className="about">
                    <main>
                        <style dangerouslySetInnerHTML={{ __html: homestyle }}/>
                        <div className="about-page">
                            <div id="" className="center head">
                                <h1>{page.title}</h1>
                            </div>
                            <div className="thumbnail-content">
                                <div className="">
                                    {aboutSec}
                                </div>
                                <div className="clearfix"></div>
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