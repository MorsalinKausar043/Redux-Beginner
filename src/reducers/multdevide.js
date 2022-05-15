const initialValue = 1;
const multDevideChange = (state = initialValue, action) => {
  switch (action.type) {
    case "MULTI":
      return state * action.playload;
    case "DEVIDE":
      return state / 2;
    default:
      return state;
  }
};

export default multDevideChange;
