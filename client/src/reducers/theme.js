const dark = localStorage.getItem('dark') === 'true';
const initialState = { dark };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
