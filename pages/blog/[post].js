import React from "react";
import Stack from "../../sdk-plugins/index.js";
import BlogTemplate from "../../templates/BlogTemplate.js"
class SingleBlog extends React.Component {
  
    static async getInitialProps({query}) {
        let postLink = query.post
      try {
        const result = await Stack.getEntry("next_blog");
        let data = result[0][0].display_blogs.filter((el)=> el.blogs.readmore.href === '/' + postLink)
        return { data: {header: result[0][0].reference_header[0], footer: result[0][0].reference_footer[0], result: data[0]}};
      } catch (error) {
        console.error(error);
      }
    }
    render() {
      return <BlogTemplate page={this.props.data} />;
    }
  }
  export default SingleBlog;