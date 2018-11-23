import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Query } from "react-apollo";

import { toggleFetch } from "../reducers/view";

import { GET_RESERVATIONS } from "../queries/queries";

const mapStateToProps = state => ({
  fetch: state.view.fetch
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleFetch
    },
    dispatch
  );

class ReservationsQuery extends Component {
  render() {
    return (
      <Query
        query={GET_RESERVATIONS}
        variables={{
          offset: 0,
          limit: 100
        }}
        notifyOnNetworkStatusChange
      >
        {({ loading, error, data, fetchMore }) => {
          const doFetchMore = () => {
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
            });
          };
          if (this.props.fetch) {
            setTimeout(() => {
              this.props.toggleFetch();
              doFetchMore();
            }, 200);
          }
          return null;
        }}
      </Query>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationsQuery);
