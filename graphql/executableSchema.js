import { makeExecutableSchema } from 'graphql-tools';
import category from './models/category.graphql';
import rootQuery from './queries/rootQuery';
import rootMutation from './mutation/rootMutation';
import schema from './schema';
import resolvers from './resolvers/rootResolver';

export default makeExecutableSchema({
  typeDefs: [
    schema, rootQuery, rootMutation, category,
  ],
  resolvers,
});
