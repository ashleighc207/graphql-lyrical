import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import "../style/style.css";

const SongList = props => {
  return (
    <div>
      {props.data.loading ? (
        <div> Loading... </div>
      ) : (
        <div className="song-list">
          {props.data.songs.map(s => {
            return (
              <div className="song" key={s.id}>
                {s.title}
              </div>
            );
          })}
        </div>
      )}
      <Link to="/add-song">Test</Link>
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
