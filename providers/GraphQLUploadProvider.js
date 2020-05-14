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
  _registerCommands(config) {
    this.app.bind('GraphQL/Commands/Make:UploadScalar', () =>
      require('../commands/MakeUploadScalar')(config)
    );
  }

  _registerBindings(config) {
    this.app.singleton('Adonis/Addons/GraphQLFile', (app) => {
      return require('../src/GraphQLFile')(config.defaultTypeName);
    });
    this.app.alias('Adonis/Addons/GraphQLFile', 'GraphQLFile');

    this.app.bind('Adonis/Middleware/GraphQLUpload', (app) => {
      const GraphQLUploadMiddlware = require('../src/GraphQLUploadMiddleware');
      return new GraphQLUploadMiddlware(app.use('Adonis/Src/Config'));
    });
  }

  register() {
    const config = this.app
      .use('Adonis/Src/Config')
      .merge('graphqlUpload', defaultConfig);

    this._registerCommands(config);
    this._registerBindings(config);
  }

  boot() {
    const ace = require('@adonisjs/ace');

    ace.addCommand('GraphQL/Commands/Make:UploadScalar');
  }
}

module.exports = GraphQLUploadProvider;
