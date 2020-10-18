export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after development
  token:
    "BQDVxo1Nsd7Qj9tbHMefwoEtH0R4lY3bOW2jp2ai_VNkO01fl8bI1R965xyMJ5qvKVV7qTN5fd1631GqIJk1ARpBl3GERBPXdw1xXb_hdwmlBSAtjQIf-DhH_iqDTvAvDOwqN9oojW-rBmOtYUum1f0b2MuX3Cm4JiaPma8gniJIeYkf",
};

//satate - how it currently looks like, action - manupulate how datalayer looks alike
const reducer = (state, action) => {
  console.log("Action: ", action);

  //Listner
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        //update user
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
