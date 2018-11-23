import css from "./Reservations.css";

const ReservationListItem = ({ item }) => {
  return (
    <div className="col-xs-12 col-sm-2">
      <div className={css.reservation}>
        <div>
          <span>{item.hotelName}</span>
          <span>{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationListItem;
