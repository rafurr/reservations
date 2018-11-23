import React, { Component } from "react";
import { compose, graphql } from "react-apollo";
import { ADD_RESERVATION } from "../queries/queries";

import Button from "@material-ui/core/Button";

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hotelName: ""
    };
  }
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleHotelNameChange = e => {
    this.setState({ hotelName: e.target.value });
  };

  handleSubmit = e => {
    const { addReservation } = this.props;
    e.preventDefault();
    if (!this.state.name.trim()) {
      return;
    }
    addReservation({
      variables: { name: this.state.name, hotelName: this.state.hotelName }
    });
    this.setState({ name: "", hotelName: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input onChange={this.handleNameChange} value={this.state.name} />
          <input
            onChange={this.handleHotelNameChange}
            value={this.state.hotelName}
          />
          <Button type="submit" variant="outlined" color="primary">
            Add Reservation
          </Button>
        </form>
      </div>
    );
  }
}
export default compose(graphql(ADD_RESERVATION, { name: "addReservation" }))(
  ReservationForm
);
