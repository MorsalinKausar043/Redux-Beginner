const initialValue = 0;
const changeTheNumber = (state= initialValue, action) =>{
    switch (action.type) {
      case "INCREMENT":
        return state + action.playload;
      case "DECREMENT":
        return state -1;
        default:return state;
    }
}

export default changeTheNumber;