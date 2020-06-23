const Contentstack = require("contentstack")
export default {
  getEntry(ctUid) {
    return new Promise(resolve => {
      const Stack = Contentstack.Stack({
        api_key: process.env.api_key,
        delivery_token: process.env.delivery_token,
        environment: process.env.environment
      });
      Stack.ContentType(ctUid)
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
   
  }
};
