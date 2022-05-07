const graphql = require('graphql');
const _ = require('lodash');
const { post } = require('../../routes/users');

const {GraphQLObjectType,
       GraphQLString,
       GraphQLInt,
       GraphQLSchema} = graphql

const users = [
    {"id": "23", "userName":"xyz", "password":"ejfn20","post":[]},
    {"id": "47", "userName":"abc", "password":"sjkja22","post":[]},
    {"id": "13", "userName":"pqrs", "password":"sjdnsjdn11","post":[]},
    {"id": "76", "userName":"klmnop", "password":"BWKJAF33","post":[]}
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields:{
        id:{type: GraphQLString},
        firstName:{type: GraphQLString},
        age:{type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id:{type:GraphQLString},password:{type:GraphQLString}},
            resolve(parentValue, args){
                return _.find(users,{id:args.id,password:args.password})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})