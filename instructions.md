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
Route.post('/graphql', 'GraphQLController.exec').middleware('graphqlUpload');
```

## Create Scalar Type for GraphQL Schema

Run the following command

```js
adonis make:guploadscalar
```

Now you can use 'File' type for file upload, like following:

```js
type Mutation {
  uploadFile(file: File!): UploadFileResponse
}
```
