import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerStatus } from "../redux/actions/searchAction";
import PlayerCart from "./PlayerCart";

const Player = () => {
  const [searchPlayer, setSearchPlayer] = useState("");
  const { searchPlayers, loadingPlayer, errorMessage } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleSearchPLayer = () => {
    dispatch(getPlayerStatus(searchPlayer));
  };

  return (
    <div className="player">
      <div className="container">
        <h1>League Of Legends Player Searcher</h1>
        <div playerInput>
          <input
            value={searchPlayer}
            onChange={(e) => {
              setSearchPlayer(e.target.value);
            }}
            type="text"
          ></input>
          <button onClick={handleSearchPLayer}>Search</button>
        </div>
      </div>
      {errorMessage ? <p>There is no such player</p> : null}
      <div className="playerFlex">
        {!loadingPlayer ? (
          searchPlayers.map((item) => {
            return (
              <div>
                <PlayerCart item={item} />
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Player;
