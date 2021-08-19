const initialState = {
  ciites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITIES_LOADED":
      return {
        ciites: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
