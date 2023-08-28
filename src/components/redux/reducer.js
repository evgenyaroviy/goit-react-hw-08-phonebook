import { authReducer } from "./authSlice";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
