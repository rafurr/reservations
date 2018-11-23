const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Reservation {
    id: ID! # Unique id
    name: String
    hotelName: String
  }

  type Query {
    getReservations(
      offset: Int
      limit: Int
      sortField: String
      sortOrder: String
    ): [Reservation]
  }

  type Mutation {
    addReservation(name: String!, hotelName: String!): Reservation
  }
`;

module.exports = typeDefs;
