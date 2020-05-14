'use strict';

class GraphQLUploadMiddleware {
  _post(request) {
    let { operations, map } = request.post();
    operations = JSON.parse(operations);
    map = JSON.parse(map);
    Object.keys(map).forEach((key) => {
      operations.variables[map[key][0].split('.').pop()] = request.file(key);
    });
    return operations;
  }
  async handle({ request }, next) {
    if (request.is('multipart/form-data')) {
      request.post = () => this._post(request);
    }
    await next();
  }
}

module.exports = GraphQLUploadMiddleware;
