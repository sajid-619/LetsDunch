const initialState = {};
const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDRESS':
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};
export default addressReducer;
