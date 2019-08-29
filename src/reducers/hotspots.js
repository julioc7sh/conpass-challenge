export default function hotspotsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_HOTSPOT":
      let next =
        state.length > 0
          ? Math.max(...state.map(hotspot => hotspot.id)) + 1
          : 1;
      const hotspot = {
        id: next,
        text: `Hotspot`,
        title: action.payload.title,
        description: action.payload.description,
        editable: action.payload.editable,
        posX: action.payload.posX,
        posY: action.payload.posY
      };
      return [...state, hotspot];
    case "UPDATE_HOTSPOT":
      const newHotspot = Object.assign({}, state[action.payload.index], {
        title: action.payload.title,
        description: action.payload.description,
        editable: action.payload.editable
      });
      if (state.length === 0) {
        return [newHotspot];
      }
      return [
        ...state.slice(0, action.payload.index),
        newHotspot,
        ...state.slice(action.payload.index + 1)
      ];
    case "REMOVE_HOTSPOT":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
