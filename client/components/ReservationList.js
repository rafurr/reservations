import React from "react";
import { graphql, compose } from "react-apollo";
import classNames from "classnames";

import css from "./Reservations.css";

import { GET_RESERVATIONS } from "../queries/queries";

import TitleBar from "./TitleBar";
import ReservationForm from "./ReservationForm";
import ReservationsQuery from "./ReservationsQuery";
import ReservationListItem from "./ReservationListItem";

const ReservationList = props => {
  let { reservations } = props;

  if (reservations.loading) return <p>Loading...</p>;

  let items = reservations.getReservations;

  // var listClass = classNames(css.reservation_list);

  return (
    <div className={css.container}>
      <TitleBar />
      <div className={css.top_message}>Under Construction</div>
      <ReservationForm />
      <ReservationsQuery />
      <div className={css.reservation_list}>
        {items.map(item => {
          return <ReservationListItem key={item.id} item={item} />;
        })}
      </div>
      {true && (
        <footer className={css.footer}>
          &copy; ACME Reservation Inc. 2018. All rights Reserved
        </footer>
      )}
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
