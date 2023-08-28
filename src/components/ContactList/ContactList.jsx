import { useDispatch, useSelector } from 'react-redux';
import {  getFilteredContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { delContactThunk, getAllContactsThunk } from 'components/redux/thunks';


export const ContactList = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(getFilteredContacts)

  useEffect(() => {
    dispatch(getAllContactsThunk())
  }, [dispatch])

  const handleDeleteContact = id => {
    dispatch(delContactThunk(id));;
  };

  return (
    <div>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              {name}: {number}
            </div>
            <button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

