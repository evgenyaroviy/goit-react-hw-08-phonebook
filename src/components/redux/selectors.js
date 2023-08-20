import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.items
      .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      .toSorted((a, b) => a.name.localeCompare(b.name));
    return filteredContacts;
  }
);