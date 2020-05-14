# Adonis GraphQL Upload:

Adonis GraphQL Upload can be used with [adonis-graphql](https://github.com/RomainLanz/adonis-graphql) for file uploads.

## Setup

The package must be installed by using `adonis` command.

```bash
> adonis install adonis-graphql-upload
```

You can use directly `npm` or `yarn` but the instructions (`instructions.js` and `instructions.md`) will not be displayed and ran.

> :warning: This package requires `@adonisjs/bodyparser` and `graphql` to be installed.

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
