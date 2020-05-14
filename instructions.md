## Register provider

Start by registering the provider inside `start/app.js` file.

```js
const providers = ['adonis-graphql-upload/providers/GraphQLUploadProvider'];
```

## Register middleware

The next thing is to register the middleware.

The middleware is registered inside `start/kernel.js` file.

```js
const namedMiddleware = {
  graphqlUpload: 'Adonis/Middleware/GraphQLUpload',
};
```

Then you can use the middleware in any route you want.

```js
Route.get().middleware('graphqlUpload');
```

## Create File Scalar for GraphQL Schema

Add the following line at the start of your graphql schema

```js
scalar File
```

Create the resolver for this scalar

```js
const { GraphQLFile } = require('adonis-graphql-upload');

const resolver = {
  File: GraphQLFile,
};
```
