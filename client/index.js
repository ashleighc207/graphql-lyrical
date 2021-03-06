import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";
import SongCreate from "./components/SongCreate";
import LyricCreate from "./components/LyricCreate";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/style.css";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://localhost:4000/graphql`
});

const client = new ApolloClient({
  cache,
  link,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="main-container">
          <Route exact path="/" component={SongList} />
          <Route exact path="/add-song" component={SongCreate} />
          <Route exact path="/song-details/:id" component={SongDetail} />
          <Route exact path="/add-lyric/:id" component={LyricCreate} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
