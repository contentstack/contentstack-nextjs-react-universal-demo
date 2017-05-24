import React from 'react'
import homestyle from '../styles/home-style'
import Layout from '../partials/MyLayout'

export default class home extends React.Component {

    render() {
        const page = this.props.page[0];
        const header = page.reference_header[0];
        const footer = page.reference_footer[0];

        const nav = header.nav_menu.link.map((item, index) => {
           return (
              <a href={item.href} key={index}>{item.title}</a>
           )
        });

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

        const herobanner = page.hero_banner.map((item, index) => {
            return (
                <div key={index}>
                    <ul>
                        <li>
                            <img className="fullwidth" src={item.image.url} />
                            <div className="banner-content">
                                <h1>{item.title}</h1>
                                <h3>{item.description}</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        });
        const section_heading = page.section_heading.heading.map((heading, index) =>{
            return (
                <div key={index} className="port-bx clearfix">
                    <div className="image">
                        <i className={"fa " + (heading.fontawesome_icon)} aria-hidden="true"></i>
                    </div>
                    <div className="px-desc">
                        <h3>{heading.title}</h3>
                        <p>{heading.description}</p>
                    </div>
                </div>
            )
        });
        return (
            <Layout>
                <style dangerouslySetInnerHTML={{ __html: homestyle }}/>
                <header>
                    <a className="logo" href="/">
                        <span className="logo-text"><i className="fa fa-file-code-o" aria-hidden="true"></i> {header.logo_title}</span>
                    </a>
                    <nav className="nav-menu">
                        {nav}
                    </nav>
                </header>
                <div className="wrapper">
                    <main>
                        <div>
                            <div id="">
                                <div className="hero-banner" id="">

                                   {herobanner}
                                </div>
                                <div className="portpolio clearfix">
                                    <div className="container clearfix">
                                        <h1>{page.section_heading.title}</h1>
                                        <h2>{page.section_heading.description}</h2>
                                        {section_heading}
                                    </div>
                                </div>
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