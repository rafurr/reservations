import css from "./Reservations.css";

const ReservationListItem = ({ item }) => {
  return (
    <div className={css.reservation}>
      <div>{item.name}</div>
      <div>{item.hotelName}</div>
    </div>
  );
};

export default ReservationListItem;
