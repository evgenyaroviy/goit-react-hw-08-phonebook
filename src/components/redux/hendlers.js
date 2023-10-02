export const handleFulfieldContacts = (state, { payload }) => {
  state.items = payload
}

export const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.unshift(payload);
};

export const handleFulfieldSignUp = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
  state.isAuth = true;
};

export const handleFulfieldLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};

export const handlePendingRefresh = (state, actions) => {
  state.isRefreshing = true;
};

export const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isAuth = true;
  state.isRefreshing = false;
};

export const handleRejectedRefresh = (state, action) => {
  state.isRefreshing = false;
};

export const handleFulfilledLogout = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isAuth = false;
};

export const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const handleFulfield = (state) => {
  state.isLoading = false
}

export const handlePending = (state) => {
  state.isLoading = true
  state.error = ''
}

export const handleRejected = (state, {error}) => {
  state.isLoading = false
  state.error = error.error
}
