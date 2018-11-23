import gql from "graphql-tag";

export const GET_RESERVATIONS = gql`
  query GetReservations($offset: Int, $limit: Int) {
    getReservations(offset: $offset, limit: $limit) {
      id
      name
      hotelName
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation AddReservation($name: String!, $hotelName: String!) {
    addReservation(name: $name, hotelName: $hotelName) {
      id
      name
      hotelName
    }
  }
`;

// export const query = gql`
//   query GetTodos {
//     todos @client {
//       id
//       text
//       completed
//     }
//   }
// `;
// export const ADD_TODO = gql`
//   mutation addTodoItem($text: String!) {
//     addTodoItem(text: $text) @client {
//       id
//     }
//   }
// `;

// export const GET_TODOS = gql`
//   {
//     todos @client {
//       id
//       completed
//       text
//     }
//     visibilityFilter @client
//   }
// `;
// export const GET_VISIBILITY_FILTER = gql`
//   {
//     visibilityFilter @client
//   }
// `;

// export const TOGGLE_TODO = gql`
//   mutation ToggleTodo($id: Int!) {
//     toggleTodo(id: $id) @client
//   }
// `;
