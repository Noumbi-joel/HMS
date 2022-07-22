export const fetchPatient = (uid) => async (dispatch) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("patient")
      .doc(uid)
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

export const fetchDoctor = (uid) => async (dispatch) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection("Doctor")
      .doc(uid)
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
