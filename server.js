import Hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { port } from './config/config';
import addPlugins from './routes/pluginsHapi';
import schema from './graphql/executableSchema';

const server = Hapi.server({
  host: '0.0.0.0',
  port,
});

addPlugins(server, graphqlHapi, graphiqlHapi, schema);

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}


export { server, start };
