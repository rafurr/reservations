export const SET_NAME = "view/SET_NAME";
export const SET_HOTEL_NAME = "view/SET_HOTEL_NAME";
export const TOGGLE_FETCH = "view/TOGGLE_FETCH";

const initialState = {
  fetch: false,
  name: "",
  hotelName: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };

    case SET_HOTEL_NAME:
      return {
        ...state,
        hotelName: action.payload
      };

    case TOGGLE_FETCH: {
      return {
        ...state,
        fetch: !state.fetch,
        name: "",
        hotelName: ""
      };
    }

    default:
      return state;
  }
};

export const setName = value => ({
  type: SET_NAME,
  payload: value
});

export const setHotelName = value => ({
  type: SET_HOTEL_NAME,
  payload: value
});

export const toggleFetch = () => ({
  type: TOGGLE_FETCH
});
