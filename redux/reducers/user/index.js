const initialState = {
  doctor: null,
  patient: null,
  doctors: [],
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DOC":
      return {
        ...state,
        doctor: action.payload,
      };
    case "SAVE_PAT":
      return {
        ...state,
        patient: action.payload,
      };

    case "FETCH_DOCTORS":
      return {
        ...state,
        doctors: [...state.doctors, action.payload],
      };
    default:
      return state;
  }
};

export default user;
