import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import SongList from "./components/SongList";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://localhost:4000/graphql`
});

const client = new ApolloClient({
  cache,
  link
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
