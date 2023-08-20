import { ContactForm } from './Phonebook/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';

export const App = () => {
  const { isLoading, error } = useSelector(getContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <div style={{marginLeft: '30px'}}>Loading...</div>}
      {error && <div>{error.message}</div>}
      <Filter />
      <ContactList />
    </div>
  );
};