import { ContactForm } from '../../Phonebook/ContactForm';
import { Filter } from '../../Filter/Filter';
import { ContactList } from '../../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { Box, Container, Text } from '@chakra-ui/react';

const PhonebookPage = () => {
  const { isLoading, error } = useSelector(getContacts);
  return (
    <Container>
      <Box bgColor='blue.400' borderRadius={4}>
      <Text as='i' fontSize='4xl' ml={5} fontWeight='700'>Phonebook</Text>
      <ContactForm />
      </Box>
      <Box bgColor='yellow.400' borderRadius={4}>
      <Text as='i' fontSize='4xl' ml={5} fontWeight='600'>Contacts</Text>
      {isLoading && <div style={{marginLeft: '30px'}}>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Filter />
      <ContactList />
      </Box>
    </Container>
  );
};

export default PhonebookPage