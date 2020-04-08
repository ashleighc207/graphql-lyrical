import React, { useEffect } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
const SongDetail = props => {
  console.log(props);
  return (
    <div>
      <Link to="/" className="text-link">
        <i className="material-icons arrow-icon">arrow_left</i> Back
      </Link>
      {props.data.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3 className="heading-three">{props.data.song.title}</h3>
          {props.data.song.lyrics &&
            props.data.song.lyrics.map(l => {
              console.log(l);
              return (
                <div className="lyric" key={l.id}>
                  <span>{l.content}</span>
                </div>
              );
            })}
        </div>
      )}
      <div className="btn-container">
        <Link to={`/add-lyric/${props.match.params.id}`} className="circle-btn">
          <i className="material-icons">add</i>
        </Link>
      </div>
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
        content
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
