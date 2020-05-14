const { GraphQLScalarType, GraphQLError } = require('graphql');
const File = require('@adonisjs/bodyparser/src/Multipart/File');

module.exports = new GraphQLScalarType({
  name: 'File',
  description: 'The `File` scalar type represents a file upload.',
  parseValue(value) {
    if (value instanceof File) return value;
    throw new GraphQLError('File value invalid.');
  },
  parseLiteral(ast) {
    throw new GraphQLError('File literal unsupported.', ast);
  },
  serialize() {
    throw new GraphQLError('File serialization unsupported.');
  },
});
