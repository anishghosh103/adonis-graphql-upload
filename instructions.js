'use strict';

const { join } = require('path');

module.exports = async (cli) => {
  try {
    await cli.makeConfig(
      'graphqlUpload.js',
      join(__dirname, './config/graphqlUpload.js')
    );
    cli.command.completed('create', 'config/graphqlUpload.js');
  } catch (err) {}
};
