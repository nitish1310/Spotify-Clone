export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

//satate - how it currently looks like, action - manupulate how datalayer looks alike
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        //update user
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
