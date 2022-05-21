import "reflect-metadata";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import { AppDataSource } from './config/database';
import { concatAST } from 'graphql';
import { GqlExtractor } from './lib/gql-extractor.class';
import { UserTokenExtractor } from "./lib/user-token-extractor.class";

(async () => {
    dotenv.config({ path: __dirname+'/.env' });
    AppDataSource.initialize().catch((err) => {
        console.error('Error during Data Source initialization', err)
    });
    
    // typeDefs Merge
    const typeDefs_paths = path.join(__dirname, './**/*.graphql');
    const all_typeDefs = loadFilesSync(typeDefs_paths);
    const typeDefs = concatAST(all_typeDefs);
    const resolver_files = loadFilesSync(path.join(__dirname, './**/*.resolver.*'));
    const resolvers = mergeResolvers(resolver_files);
    let schemas = buildSubgraphSchema([
        {
            typeDefs,
            // @ts-ignore
            // @ts-nocheck
            resolvers 
        }
    ]);
    const server = new ApolloServer({
        cors: true,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        schema: schemas,
        debug: process.env.APP_ENVIRONTMENT == 'production' ? false: true,
        context: ({ req }) => {
            let returned = {
                user:'',
                token:'',
                permission:''
            }
            if (req.body && req.body.query) {
                const gql_request = req.body.query;
                const query_gql = `${gql_request}`;
                // console.log(query_gql);
                const gql_ekstract = new GqlExtractor(query_gql);
                // console.log(gql_ekstract);
                if (gql_ekstract.operation_name != 'login' && gql_ekstract.operation_name != 'check_permission' ) {
                    const token_extractor = new UserTokenExtractor(req.headers.authorization);
                    // console.log(token_extractor);
                    if (token_extractor.user && token_extractor.token && gql_ekstract.operation_name) {
                        // console.log(token_extractor.user);
                        returned = {
                            user: token_extractor.user,
                            token: token_extractor.token,
                            permission: gql_ekstract.operation_name
                        };
                    }
                }
            }
            return returned;
        }
    });
    if (process.env.APP_ENVIRONTMENT && process.env.APP_ENVIRONTMENT == 'production') {
        server.listen( process.env.APP_PORT || 4004 );
    } else {
        server.listen( process.env.APP_PORT || 4004 ).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
            // console.log(req);
        });
    }
    
})();
