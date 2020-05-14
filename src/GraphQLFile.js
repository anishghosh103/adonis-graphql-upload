const { GraphQLScalarType, GraphQLError } = require('graphql');
const File = require('@adonisjs/bodyparser/src/Multipart/File');

module.exports = (typeName) => {
  return new GraphQLScalarType({
    name: typeName,
    description: `The '${typeName}' scalar type represents a file upload.`,
    parseValue(value) {
      if (value instanceof File) return value;
      throw new GraphQLError(`${typeName} value invalid.`);
    },
    parseLiteral(ast) {
      throw new GraphQLError(`${typeName} literal unsupported.`, ast);
    },
    serialize() {
      throw new GraphQLError(`${typeName} serialization unsupported.`);
    },
  });
};
