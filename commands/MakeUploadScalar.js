'use strict';

/**
 * adonis-graphql-upload
 *
 * @license MIT
 * @copyright Anish Ghosh <anishghosh103@gmail.com>
 */

const _ = require('lodash');
const Config = use('Config');
const { join } = require('path');
const { Command } = require('@adonisjs/ace');

class MakeUploadScalar extends Command {
  /**
   * Command signature required by ace.
   *
   * @return {string}
   */
  static get signature() {
    return 'make:guploadtype { name?=File: Name of scalar type }';
  }

  /**
   * Command description.
   *
   * @return {string}
   */
  static get description() {
    return 'Make a new GraphQL Upload Scalar Type';
  }

  /**
   * Method called when command is executed. This method will
   * require all files from the migrations directory
   * and execute all pending schema files.
   *
   * @param  {object}   args
   *
   * @return {Promise<void>}
   */
  async handle({ name }) {
    const resolverTemplatePath = join(
      __dirname,
      '../templates/Resolver.mustache'
    );
    const resolverFilePath =
      join(Config.get('graphql.resolvers'), _.upperFirst(_.camelCase(name))) +
      '.js';
    const resolverTemplateContent = await this.readFile(
      resolverTemplatePath,
      'utf-8'
    );
    await this.generateFile(resolverFilePath, resolverTemplateContent, {
      name,
    });

    const schemaTemplatePath = join(__dirname, '../templates/Schema.mustache');
    const schemaFilePath =
      join(Config.get('graphql.schema'), _.upperFirst(_.camelCase(name))) +
      '.graphql';
    const schemaTemplateContent = await this.readFile(
      schemaTemplatePath,
      'utf-8'
    );
    await this.generateFile(schemaFilePath, schemaTemplateContent, { name });

    console.log(
      `${this.icon('success')} ${this.chalk.green('create')}  ${name}`
    );
  }
}

module.exports = MakeUploadScalar;
