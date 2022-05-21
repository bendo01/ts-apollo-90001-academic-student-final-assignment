import { parse } from 'graphql';

export class GqlExtractor {
    public operation_name: string;
    public operation_type: string;
    public gql_request: string;

    constructor (gql_request: string) {
        this.gql_request = gql_request;
        const firstOperationDefinition = (query_gql: any) => query_gql.definitions[0];
        const firstFieldValueNameFromOperation = (operationDefinition: any) =>  operationDefinition.selectionSet.selections[0].name.value;
        const parsedQuery = parse(this.gql_request);
        this.operation_type = firstOperationDefinition(parsedQuery).operation;
        this.operation_name = firstFieldValueNameFromOperation(firstOperationDefinition(parsedQuery));
    }
}