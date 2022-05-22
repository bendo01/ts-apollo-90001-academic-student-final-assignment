import { DateTimeResolver, DateResolver, UUIDResolver, TimeResolver } from 'graphql-scalars';

module.exports = {
    DateTime: DateTimeResolver,
    Date: DateResolver, 
    uuid: UUIDResolver,
    Time: TimeResolver,
}