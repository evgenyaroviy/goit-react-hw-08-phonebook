import { authReducer } from "./authSlice";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { uxReducer } from "./uxSlice";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
  ux: uxReducer,
});
