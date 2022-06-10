export const initialState = {
  coordinates: { lat: 0, lng: 0 },
  topic: 0,
  targets: [],
  selectedTarget: {},
};

export const reducer = (state = initialState, action) => {
  const helper = {
    SET_COORDINATES: {
      ...state,
      coordinates: action.payload,
    },
    SET_TOPIC: { ...state, topic: action.payload },
    GET_TARGETS: { ...state, targets: action.payload },
    SET_SELECTED_TARGET: { ...state, selectedTarget: action.payload.target },
  };

  return helper[action.type] || state;
};
