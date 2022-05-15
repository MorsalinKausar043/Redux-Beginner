const initialValue = 0;
const multDevideChange = (state = initialValue, action) => {
  switch (action.type) {
    case "MULTI":
      return state * action.playload;
    case "DEVIDE":
      return state / 1;
    default:
      return state;
  }
};

export default multDevideChange;
