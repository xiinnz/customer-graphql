const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const customers = [
    { id: "1", name: "yeesin", email: "yeesin@gmail.com", age: 28 },
    { id: "2", name: "yeetoong", email: "yeetoong@gmail.com", age: 24 }]

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt },
    })

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        customer: {
            type: CustomerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                for (let i = 0; i < customer.length; i++) {
                    console.log(args.id);
                    if (customers[i].id == args.id) {
                        return customer[i];
                    }
                }
            }
        }
    }  
});

module.exports = new GraphQLSchema({
    query: RootQuery
});