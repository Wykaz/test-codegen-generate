import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    require: ["ts-node/register", "type-graphql", "tslib"],
    schema: "schema.js",
    documents: ['src/operations/**/*.graphql'],
    ignoreNoDocuments: true,
    generates: {
        './graphql.ts': {
            plugins: ['typescript', 'typescript-operations'],
        },
    }
}

export default config