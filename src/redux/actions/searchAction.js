import { actionTypes } from "./actionTypes";
import axios from "axios";

const API_KEY = "RGAPI-030ac454-9cb9-4a4c-95c8-25e02b10c71c";

export const getPlayerStatus = (player) => (dispatch) => {
  dispatch({ type: actionTypes.LOADING_PLAYER, payload: true });
  dispatch({ type: actionTypes.ERROR_MESSAGE, payload: "" });
  axios
    .get(
      "https://tr1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        player +
        "?api_key=" +
        API_KEY
    )
    .then((response) => {
      dispatch({ type: actionTypes.SEARCH_PLAYER, payload: response.data });
      dispatch({ type: actionTypes.LOADING_PLAYER, payload: false });
      console.log(response.data);
    })
    .catch((err) => {
      dispatch({ type: actionTypes.ERROR_MESSAGE, payload: err.toString() });
    });
};
export const deletePlayerStatus = (player) => (dispatch) => {
  dispatch({ type: actionTypes.DELETE_PLAYER, payload: player });
};
