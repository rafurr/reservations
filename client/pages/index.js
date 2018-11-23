import React, { Component } from "react";

import fetch from "isomorphic-unfetch";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import css from "./index.css";

import Layout from "../components/Layout";
import ReservationList from "../components/ReservationList";

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const store = createStore(rootReducer());

class Index extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Layout style={{ background: "red" }} className={css.layout}>
            <ReservationList />
          </Layout>
        </Provider>
      </ApolloProvider>
    );
  }
}
export default Index;
