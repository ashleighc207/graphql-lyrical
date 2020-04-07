import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import getSongs from "../queries/fetchSongs.js";
import "../style/style.css";

const SongList = props => {
  const history = useHistory();

  const handleDelete = (id, e) => {
    e.stopPropagation();
    props
      .mutate({
        variables: {
          id: id
        }
      })
      .then(() => {
        props.data.refetch();
      });
  };

  const handleSongNavigation = id => {
    history.push(`/song-details/${id}`, { state: { id: id } });
  };

  return (
    <div>
      {props.data.loading ? (
        <div> Loading... </div>
      ) : (
        <div className="song-list">
          <h3 className="heading-three">Song List</h3>
          {props.data.songs.map(s => {
            return (
              <div
                className="song"
                key={s.id}
                onClick={() => {
                  handleSongNavigation(s.id);
                }}
              >
                <span>{s.title}</span>
                <i
                  className="material-icons close-icon"
                  onClick={e => handleDelete(s.id, e)}
                >
                  close
                </i>
              </div>
            );
          })}
        </div>
      )}
      <div className="btn-container">
        <Link to="/add-song" className="circle-btn">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(getSongs)(SongList));
