const store = createStore(function(state = {}, action) {
  if (action.type === "REPLACE_ALL") {
    return action.payload;
  }
  return state;
}, {});

export const StoreDecorator = Story => (
  <Provider store={store}>
    <Story />
  </Provider>
);
