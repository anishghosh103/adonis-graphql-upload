'use strict';

/**
 * adonis-graphql-upload
 *
 * (c) Anish Ghosh <anishghosh103@gmail.com>
 *
 */

const { ServiceProvider } = require('@adonisjs/fold');

class GraphQLUploadProvider extends ServiceProvider {
  register() {
    this.app.singleton('Adonis/Addons/GraphQLFile', (app) => {
      return require('../src/GraphQLFile');
    });
    this.app.alias('Adonis/Addons/GraphQLFile', 'GraphQLFile');

    this.app.bind('Adonis/Middleware/GraphQLUpload', (app) => {
      const GraphQLUploadMiddlware = require('../src/GraphQLUploadMiddleware');
      return new GraphQLUploadMiddlware(app.use('Adonis/Src/Config'));
    });
  }
}

module.exports = GraphQLUploadProvider;
