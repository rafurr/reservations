import Reservation from "./ReservationListItem";
import css from "./Reservations.css";

import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const GET_RESERVATIONS_QUERY = gql`
  query GetReservations($offset: Int, $limit: Int) {
    getReservations(offset: $offset, limit: $limit) {
      id
      name
      hotelName
    }
  }
`;

const ADD_RESERVATION = gql`
  mutation AddReservation($name: String!, $hotelName: String!) {
    addReservation(name: $name, hotelName: $hotelName) {
      id
      name
      hotelName
    }
  }
`;

class Reservations extends React.Component {
  // <input ref={node => {nameInput = node;}}/>

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.nameInput = React.createRef();
    this.hotelNameInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }
  handleSubmit = addReservation => {
    console.log(this.nameInput.current.value);
    // this.nameInput.current.focus();
    // e.preventDefault();

    addReservation({
      variables: {
        name: this.nameInput.current.value,
        hotelName: this.hotelNameInput.current.value
      }
    });
    // this.input.value = "";
    // input.value = "";
  };

  render() {
    // const addReservationRow = (<div className="row">
    // <Mutation mutation={ADD_RESERVATION}>
    //   {(addReservation, { data }) => (
    //     <div>
    //         <input
    //           type="text"
    //           ref={this.nameInput}
    //         />
    //         <input
    //           type="text"
    //           ref={this.hotelNameInput}
    //         />
    //         <button onClick={e => this.handleSubmit(addReservation)}>Add Reservation</button>
    //     </div>
    //   )}
    // </Mutation>
    // </div>);

    return (
      <div className="container-fluid">
        <div className="row">
          <Query
            query={GET_RESERVATIONS_QUERY}
            variables={{
              offset: 0,
              limit: 100
            }}
            // pollInterval={500}
            notifyOnNetworkStatusChange
          >
            {({ loading, error, data, fetchMore }) => {
              // if (loading) {console.log('loading'); return null;}
              // if (loading) return <p>Loading...</p>;
              // if (error) return <p>Error :( {error}</p>;

              return (
                <React.Fragment>
                  <div className="cta-wrapper">
                    <button
                      onClick={() =>
                        fetchMore({
                          variables: {
                            offset: data.getReservations.length
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return Object.assign({}, prev, {
                              getReservations: [
                                ...prev.getReservations,
                                ...fetchMoreResult.getReservations
                              ]
                            });
                          }
                        })
                      }
                    >
                      Fetch
                    </button>
                  </div>
                </React.Fragment>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Reservations;
