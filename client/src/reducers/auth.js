const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
