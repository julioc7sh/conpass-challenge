export default function creation(state = false, action) {
  if (action.type === "SET_CREATION") {
    return action.payload;
  }
  return state;
}
