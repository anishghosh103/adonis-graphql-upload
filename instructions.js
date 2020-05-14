'use strict';

const path = require('path');

module.exports = async (cli) => {
  try {
    const fromPath = path.join(__dirname, './config/graphqlUpload.js');
    const toPath = path.join(cli.helpers.configPath(), 'graphqlUpload.js');
    await cli.copy(fromPath, toPath);
    cli.command.completed('create', 'config/graphqlUpload.js');
  } catch (err) {}
};
