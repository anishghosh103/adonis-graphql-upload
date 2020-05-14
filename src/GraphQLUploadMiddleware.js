'use strict';

const _ = require('lodash');

class GraphQLUploadMiddleware {
  _post(request) {
    let { operations, map } = request.all();
    operations = JSON.parse(operations);
    map = JSON.parse(map);
    Object.keys(map).forEach((key) => {
      const path = map[key][0].split('.');
      _.set(operations, path, request.file(key));
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
