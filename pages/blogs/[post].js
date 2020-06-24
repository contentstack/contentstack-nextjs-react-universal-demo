import React from "react";
import Stack from "../../sdk-plugins/index.js";
import BlogTemplate from "../../templates/blogpost-temp.js";

class BlogPosts extends React.Component {
  static async getInitialProps({ query }) {
    let postLink = query.post;
    try {
      if (postLink ==='/blog-list') throw '404'
      const result = await Stack.getEntry("blog_posts");
      let data = result[0];
      data =data.filter(obj => obj.url === "/" + postLink)
      if (data.length === 0) throw  '404'
      return {
        data: {
          result: data[0],
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return < BlogTemplate page={this.props.data} />;
  }
}
export default BlogPosts;
