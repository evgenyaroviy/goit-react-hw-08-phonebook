export const handleFulfieldContacts = (state, { payload }) => {
  state.items = payload
  
}

export const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.unshift(payload);
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
  state.error = error.message
}