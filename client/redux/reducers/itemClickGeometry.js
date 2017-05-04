const initialState = {
  geometry: {
    width: 1
  }
};

export default function itemClickGeometryReduce(state = initialState, action) {
  switch (action.type) {
    case 'ITEM_CLICK_GEOMETRY':
      return { ...state, geometry: action.payload };

    default:
      return state;
  }
}
