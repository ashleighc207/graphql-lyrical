import React, { useEffect, useState } from "react";
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
