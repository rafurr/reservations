import React from "react";
import { graphql, compose } from "react-apollo";
import classNames from "classnames";

import css from "./Reservations.css";

import { GET_RESERVATIONS } from "../queries/queries";

import ReservationListItem from "./ReservationListItem";

const ReservationList = props => {
  let { reservations } = props;

  if (reservations.loading) return <p>Loading...</p>;

  let items = reservations.getReservations;

  var listClass = classNames("col-xs-12 col-sm-4", css.reservation_list);

  return (
    <div className={listClass}>
      {items.map(item => {
        return <ReservationListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default compose(
  graphql(GET_RESERVATIONS, {
    options: ownProps => ({
      variables: { offset: 0, limit: 100 }
    }),
    name: "reservations"
  })
)(ReservationList);
