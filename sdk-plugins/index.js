const Contentstack = require("contentstack");

export default {
  getEntry(ctUid) {
    return new Promise((resolve, reject) => {
      const Stack = Contentstack.Stack({
        api_key: process.env.api_key,
        delivery_token: process.env.delivery_token,
        environment: process.env.environment,
        region: process.env.region,
      });
      Stack.ContentType(ctUid)
        .Query()
        .addParam("include_owner", "true")
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
