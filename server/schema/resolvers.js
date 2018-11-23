const resevations = require("../data/resevations.json");

let idCount = resevations.length;

const resolvers = {
  Query: {
    getReservations: (root, args, context, info) => {
      // console.log(`${args.offset} - ${args.limit}`);
      // console.log(args, context, info);
      // console.log(resevations);
      let result = resevations.slice(args.offset, args.limit);
      return result;
    }
  },
  Mutation: {
    addReservation: (root, args, context, info) => {
      if (resevations) {
        console.log(args);
        const reservation = {
          id: `reservation-${idCount++}`,
          name: args.name,
          hotelName: args.hotelName
        };
        resevations.push(reservation);
        return reservation;
      }
    }
  }
};

module.exports = resolvers;
