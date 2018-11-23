import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { compose, graphql } from "react-apollo";

import { setName, setHotelName, toggleFetch } from "../reducers/view";
import { increment, decrement } from "../reducers/counter";

import { ADD_RESERVATION } from "../queries/queries";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const mapStateToProps = state => ({
  count: state.counter.count,
  name: state.view.name,
  hotelName: state.view.hotelName
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      setName,
      setHotelName,
      toggleFetch
    },
    dispatch
  );

class ReservationForm extends Component {
  handleNameChange = e => {
    this.props.setName(e.target.value);
  };

  handleHotelNameChange = e => {
    this.props.setHotelName(e.target.value);
  };

  handleSubmit = e => {
    const { addReservation, toggleFetch, name, hotelName } = this.props;
    e.preventDefault(); //prevent full refresh
    const reservation = { name: name.trim(), hotelName: hotelName.trim() };
    if (!reservation.name || !reservation.name) {
      return;
    }
    addReservation({ variables: reservation });
    toggleFetch();
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <div>
            <TextField
              id="guest-name"
              value={this.props.name}
              onChange={this.handleNameChange}
              label="Guest Name"
              placeholder="Enter Guest Name"
              margin="normal"
              autoComplete="off"
            />
          </div>
          <div>
            <TextField
              id="hotel-name"
              value={this.props.hotelName}
              onChange={this.handleHotelNameChange}
              label="Hotel Name"
              placeholder="Enter Hotel Name"
              margin="normal"
              autoComplete="off"
            />
          </div>
          <div>
            <Button type="submit" variant="outlined" color="primary">
              Add Reservation
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(graphql(ADD_RESERVATION, { name: "addReservation" }))(ReservationForm)
);
