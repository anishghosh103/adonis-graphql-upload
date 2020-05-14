const { GraphQLScalarType, GraphQLError } = require('graphql');
const File = require('@adonisjs/bodyparser/src/Multipart/File');

module.exports = new GraphQLScalarType({
  name: 'GraphQLFile',
  description: 'The `GraphQLFile` scalar type represents a file upload.',
  parseValue(value) {
    if (value instanceof File) return value;
    throw new GraphQLError('GraphQLFile value invalid.');
  },
  parseLiteral(ast) {
    throw new GraphQLError('GraphQLFile literal unsupported.', ast);
  },
  serialize() {
    throw new GraphQLError('GraphQLFile serialization unsupported.');
  },
});
