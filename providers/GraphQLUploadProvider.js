'use strict';

/**
 * adonis-graphql-upload
 *
 * (c) Anish Ghosh <anishghosh103@gmail.com>
 *
 */

const { ServiceProvider } = require('@adonisjs/fold');

const defaultConfig = require('../config/graphqlUpload');

class GraphQLUploadProvider extends ServiceProvider {
  register() {
    const config = this.app
      .use('Adonis/Src/Config')
      .merge('graphqlUpload', defaultConfig);

    this.app.singleton('Adonis/Addons/GraphQLFile', (app) => {
      return require('../src/GraphQLFile')(config.typeName);
    });
    this.app.alias('Adonis/Addons/GraphQLFile', 'GraphQLFile');

    this.app.bind('Adonis/Middleware/GraphQLUpload', (app) => {
      const GraphQLUploadMiddlware = require('../src/GraphQLUploadMiddleware');
      return new GraphQLUploadMiddlware(app.use('Adonis/Src/Config'));
    });
  }
}

module.exports = GraphQLUploadProvider;
