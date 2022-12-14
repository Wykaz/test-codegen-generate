const {buildSchemaSync} = require("type-graphql");
const {resolvers} = require("@generated/type-graphql");

module.exports = buildSchemaSync({
    resolvers: resolvers,
    validate: false
})