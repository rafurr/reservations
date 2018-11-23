export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT:
      return {
        ...state,
        count: Math.max(0, state.count - 1),
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
};

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
