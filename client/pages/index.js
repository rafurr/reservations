import fetch from "isomorphic-unfetch";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import css from "./index.css";

import Layout from "../components/Layout";
import Reservations from "../components/Reservations";
import ReservationForm from "../components/ReservationForm";
import ReservationList from "../components/ReservationList";

// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class Index extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          <div className={css.hello}>Under Construction</div>
          <ReservationForm />
          <Reservations />
          <ReservationList />
        </Layout>
      </ApolloProvider>
    );
  }
}
export default Index;
