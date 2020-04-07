import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import getSongs from "../queries/fetchSongs.js";

const SongCreate = props => {
  const [songTitle, setSongTitle] = useState("");

  const handleChange = e => {
    setSongTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props
      .mutate({
        variables: {
          songTitle: songTitle
        },
        refetchQueries: [{ query: getSongs }]
      })
      .then(() => {
        props.history.push("/");
      });
  };
  return (
    <div>
      <Link to="/" className="text-link">
        <i className="material-icons arrow-icon">arrow_left</i> Back
      </Link>
      <form className="form" onSubmit={e => handleSubmit(e)}>
        <h3 className="heading-three">Add a Song</h3>
        <div className="input-container">
          <label className="text-input-label">Title</label>
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
  mutation AddSong($songTitle: String) {
    addSong(title: $songTitle) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
