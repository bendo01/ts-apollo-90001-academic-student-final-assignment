import { DateTimeResolver, DateResolver, UUIDResolver } from 'graphql-scalars';

module.exports = {
    DateTime: DateTimeResolver,
    Date: DateResolver, 
    uuid: UUIDResolver,
}