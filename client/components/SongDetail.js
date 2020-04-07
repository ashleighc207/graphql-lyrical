import React, { useEffect } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongDetail = props => {
  return (
    <div>
      {props.data.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3 className="heading-three">{props.data.song.title}</h3>
          {props.data.song.lyrics &&
            props.data.song.lyrics.map(l => {
              return <span>{l}</span>;
            })}
        </div>
      )}
    </div>
  );
};

const query = gql`
  query Song($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
      }
    }
  }
`;

export default graphql(query, {
  options: props => {
    console.log(props);
    return { variables: { id: props.match.params.id } };
  }
})(SongDetail);
