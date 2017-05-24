import Head from 'next/head'
const Layout = (props) => (

  <div id="asdf4534">
      <div>
          <Head>
              <title>CS Nextjs Website</title>
              <link type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" />
              <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" rel="stylesheet" />
          </Head>
      </div>
    {props.children}


      <style jsx>{`
          body{
            font-family: 'Open Sans', sans-serif;
          }
          #asdf4534{
          width:100%;
          margin: 0 auto;
          }
            `}</style>
  </div>
)

export default Layout
