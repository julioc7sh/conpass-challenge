export default function hotspotsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_HOTSPOT":
      let next = state.length + 1;
      return [
        ...state,
        {
          id: next,
          text: `Hotspot`,
          title: action.payload.title,
          description: action.payload.description,
          editable: action.payload.editable,
          posX: action.payload.posX,
          posY: action.payload.posY
        }
      ];
    case "REMOVE_HOTSPOT":
      let items = [
        ...state.slice(0, action.payload - 1),
        ...state.slice(action.payload)
      ];
      return items;
    default:
      return state;
  }
}
