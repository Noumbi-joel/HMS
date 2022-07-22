const initialState = {
  user: null,
  docEmails: ["jeje@gmail.com", "albert@gmail.com", "leonelb@gmail.com"],
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOC_EMAIL":
        return state.docEmails.push(action.payload);
    default:
      return state;
  }
};

export default user;
