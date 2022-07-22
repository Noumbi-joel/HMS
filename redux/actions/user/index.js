
export const fetchDoctors = (uid) => async (dispatch) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("Doctor")
      .doc()
      .get();
    if (snapshot.exists) {
      return dispatch({ type: FETCH_USER, payload: snapshot.data() });
    } else {
      console.log("user does not exist");
    }
  } catch (err) {
    console.log("error while fetching profile data: " + err);
  }
};

export const saveDoctor = (userData) => async (dispatch) => {
  try {
    return dispatch({ type: "SAVE_DOC", payload: userData });
  } catch (err) {
    console.log("error while fetching profile data: " + err);
  }
};

export const savePatient = (userData) => async (dispatch) => {
  try {
    return dispatch({ type: "SAVE_PAT", payload: userData });
  } catch (err) {
    console.log("error while fetching profile data: " + err);
  }
};
