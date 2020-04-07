import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import query from "../queries/fetchSongs.js";
import "../style/style.css";

const SongList = props => {
  return (
    <div>
      {props.data.loading ? (
        <div> Loading... </div>
      ) : (
        <div className="song-list">
          <h3 className="heading-three">Song List</h3>
          {props.data.songs.map(s => {
            return (
              <div className="song" key={s.id}>
                {s.title}
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

export default graphql(query)(SongList);
