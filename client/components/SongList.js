import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = props => {
  return (
    <div>
      {props.data.loading ? (
        <div> Loading... </div>
      ) : (
        <>
          {props.data.songs.map(s => {
            return <div key={s.id}>{s.title}</div>;
          })}
        </>
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
