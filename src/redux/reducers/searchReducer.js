import { actionTypes } from "../actions/actionTypes";
const INITIAL_STATE = {
  searchPlayers: [],
  loadingPlayer: false,
  errorMessage: "",
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PLAYER: {
      return {
        ...state,
        searchPlayers: [...state.searchPlayers, action.payload],
      };
    }
    case actionTypes.DELETE_PLAYER: {
      return {
        ...state,
        searchPlayers: state.searchPlayers.filter(
          (x) => x.name !== action.payload
        ),
      };
    }
    case actionTypes.LOADING_PLAYER: {
      return {
        ...state,
        loadingPlayer: action.payload,
      };
    }
    case actionTypes.ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
};
