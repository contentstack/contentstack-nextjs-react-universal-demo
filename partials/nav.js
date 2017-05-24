import React from 'react'
import S from 'shorti'
import Link from 'next/link'
export default class Nav extends React.Component {
  render() {
    const page = this.props.page
    const linkStyle = {
      marginRight: 15

    }
    return (
    <header>
        <a className="logo" href="/">
            <span className="logo-text">Acme Inc</span>
        </a>
        <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
            <style jsx>{`


            `}</style>
    </header>
    )
  }
}