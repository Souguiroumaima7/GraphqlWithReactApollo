const axios = require('axios');
const { type } = require('express/lib/response');
const { GraphQLObjectType ,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

//Launch Type

const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        Rocket: { type: RocketType }  
    })
});

//Rocket Type

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        Rocket_id: { type: GraphQLString },
        Rocket_name: { type: GraphQLString },
        Rocket_type: { type: GraphQLString },
         
    })
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios.get('https://api.spacexdata.com/v5/launches')
                    .then(res => res.data);
            }
        }
    }
});

launch: {
    type: LaunchType
}

module.exports = new GraphQLSchema({
    query: RootQuery
})