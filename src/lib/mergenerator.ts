/*
https://www.graphql-tools.com/docs/schema-merging
*/

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';
import * as path from 'path';

/**
 * Start Merge Graphql
 */
const loadedFileGraphqls = loadFilesSync(path.resolve("./")+'/src/**/*.graphql');
const typeDefs = mergeTypeDefs(loadedFileGraphqls);
/** 
 * End Merge Graphql
*/

/**
 * Start Merge Reolver
 */
const resolver_files = loadFilesSync(path.resolve("./")+'/src/**/*.resolver.*');
const resolvers = mergeResolvers(resolver_files);

/** 
 * End Merge Reolver
*/

export { typeDefs, resolvers };

