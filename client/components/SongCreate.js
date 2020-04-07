import React from "react";

const SongCreate = () => {
  return (
    <div>
      <form className="form">
        <h3 className="heading-three">Add a Song</h3>
        <div className="input-container">
          <label className="text-input-label">Title</label>
          <input className="text-input" type="text" />
        </div>
        <button className="rect-btn">Submit</button>
      </form>
    </div>
  );
};

export default SongCreate;
