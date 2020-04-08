import React, { useState } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import getSongLyrics from "../queries/fetchLyrics.js";

const LyricCreate = props => {
  const [lyric, setLyric] = useState("");

  const handleChange = e => {
    setLyric(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props
      .mutate({
        variables: {
          lyric: lyric,
          songId: props.match.params.id
        },
        refetchQueries: [
          { query: getSongLyrics, variables: { id: props.match.params.id } }
        ]
      })
      .then(() => {
        props.history.push(`/song-details/${props.match.params.id}`);
      });
  };

  return (
    <div>
      <Link to="/" className="text-link">
        <i className="material-icons arrow-icon">arrow_left</i> Back
      </Link>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <h3 className="heading-three">Add a Lyric</h3>
        <div className="input-container">
          <label className="text-input-label">Lyric</label>
          <input
            className="text-input"
            type="text"
            onChange={e => handleChange(e)}
          />
        </div>
        <button className="rect-btn">Submit</button>
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddLyricToSong($lyric: String, $songId: ID) {
    addLyricToSong(content: $lyric, songId: $songId) {
      id
    }
  }
`;

export default graphql(mutation)(LyricCreate);
