const Contentstack = require("contentstack");

export default {
  getEntry(ctUid) {
    return new Promise((resolve, reject) => {
      const Stack = Contentstack.Stack({
        api_key: process.env.api_key,
        delivery_token: process.env.delivery_token,
        environment: process.env.environment,
      });
      Stack.ContentType(ctUid)
        .Query()
        .includeReference("reference_header", "reference_footer")
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          error => reject(error),
        );
    });
  },
};
