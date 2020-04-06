const Contentstack = require("contentstack")
export default {
  getEntry(entry) {
    const data = new Promise(resolve => {
      const Stack = Contentstack.Stack({
        api_key: process.env.api_key,
        access_token: process.env.access_token,
        environment: process.env.environment
      });
      Stack.ContentType(entry)
        .Query()
        .includeReference("reference_header", "reference_footer")
        .toJSON()
        .find()
        .then(
          function success(result) {              
            resolve(result);
          },
          function error(error) {}
        );
    });
    return data;
  }
};
