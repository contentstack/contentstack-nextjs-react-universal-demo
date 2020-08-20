const Contentstack = require("contentstack");

export default {
  getEntry(ctUid) {
    return new Promise((resolve, reject) => {
      const Stack = Contentstack.Stack({
        api_key: "blt3d760ac5ff7f3ff6",
        delivery_token: "cs8e7b7ddf048ea2d6c86e69b6",
        environment: "development",
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
