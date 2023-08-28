import { useDispatch, useSelector } from 'react-redux';
import {  getFilteredContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { delContactThunk, getAllContactsThunk } from 'components/redux/thunks';
import { toast } from 'react-hot-toast';
import { Button, Text } from '@chakra-ui/react';
import { ContactsList } from './ContactList.styled';


export const ContactList = () => {
  const notify = () =>
    toast.error('Contact was successfully deleted from your contacts list.');
  const dispatch = useDispatch()
  const filteredContacts = useSelector(getFilteredContacts)

  useEffect(() => {
    dispatch(getAllContactsThunk())
  }, [dispatch])

  const handleDeleteContact = id => {
    dispatch(delContactThunk(id))
      .unwrap()
      .then(() => {
        notify();
      });
  };

  return (
    <ContactsList>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Text as='samp' fontSize='xl' ml={5} fontWeight='500' textTransform='capitalize'>
              {name}: {number}
            </Text>
            <Button size='sm' colorScheme='messenger' type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </Button>
          </li>
        );
      })}
    </ContactsList>
  );
};

