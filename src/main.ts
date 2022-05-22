import "reflect-metadata";
import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { AppDataSource } from './config/database';
import { GqlExtractor } from './lib/gql-extractor.class';
import { UserTokenExtractor } from "./lib/user-token-extractor.class";
import { typeDefs, resolvers } from './lib/mergenerator';

(async () => {
    dotenv.config({ path: __dirname+'/.env' });
    AppDataSource.initialize().catch((err) => {
        console.error('Error during Data Source initialization', err);
    });
    const schemas = buildSubgraphSchema([
        {
            typeDefs,
            // @ts-ignore
            // @ts-nocheck
            resolvers 
        },
    ]);
    const server = new ApolloServer({
        cors: true,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        schema: schemas,
        debug: process.env.APP_ENVIRONTMENT == 'production' ? false: true,
        context: ({ req }) => {
            if (req?.body?.query) {
                const gql_request = req.body.query;
                const query_gql = `${gql_request}`;
                // console.log(query_gql);
                const gql_ekstract = new GqlExtractor(query_gql);
                // console.log(gql_ekstract);
                if (gql_ekstract.operation_name != 'login' && gql_ekstract.operation_name != 'check_permission' ) {
                    const token_extractor = new UserTokenExtractor(req.headers.authorization);
                    // console.log(token_extractor);
                    if (token_extractor.user) {
                        // console.log(token_extractor.user);
                        return token_extractor.user;
                    }
                }
            }
        }
    });
    if (process.env.APP_ENVIRONTMENT && process.env.APP_ENVIRONTMENT == 'production') {
        server.listen( process.env.APP_PORT || 4010 );
    } else {
        server.listen( process.env.APP_PORT || 4010 ).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
            // console.log(req);
        });
    }
})();
