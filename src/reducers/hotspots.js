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
    case "UPDATE_HOTSPOT":
      let hotspot = Object.assign({}, state[action.payload.index], {
        title: action.payload.title,
        description: action.payload.description,
        editable: action.payload.editable
      });
      return [
        ...state.slice(0, action.payload.index - 1),
        ...hotspot,
        ...state.slice(action.payload.index + 1)
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
