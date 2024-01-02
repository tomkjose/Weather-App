export const SET_LOCATION = "SET_LOCATION";

export const setLocation = (latitude, longitude) => ({
  type: SET_LOCATION,
  payload: { latitude, longitude },
});
