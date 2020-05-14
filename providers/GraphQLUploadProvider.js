'use strict';

/**
 * adonis-graphql-upload
 *
 * (c) Anish Ghosh <anishghosh103@gmail.com>
 *
 */

const { ServiceProvider } = require('@adonisjs/fold');

class GraphQLUploadProvider extends ServiceProvider {
  _registerCommands() {
    this.app.bind('GraphQL/Commands/Make:UploadScalar', () =>
      require('../commands/MakeUploadScalar')
    );
  }

  _registerBindings() {
    this.app.bind('Adonis/Middleware/GraphQLUpload', (app) => {
      const GraphQLUploadMiddlware = require('../src/GraphQLUploadMiddleware');
      return new GraphQLUploadMiddlware();
    });
  }

  register() {
    this._registerCommands();
    this._registerBindings();
  }

  boot() {
    const ace = require('@adonisjs/ace');

    ace.addCommand('GraphQL/Commands/Make:UploadScalar');
  }
}

module.exports = GraphQLUploadProvider;
