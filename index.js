import { GraphQLServer } from 'graphql-yoga'

import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
})

const cors = {
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
	"preflightContinue":false,
	"optionsSuccessStatus": 204,
};
const options = {
 cors,
};
server.start(options, () => console.log('Server is running on localhost:4000'))
