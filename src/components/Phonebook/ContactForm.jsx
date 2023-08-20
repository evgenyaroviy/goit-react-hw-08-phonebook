import css from "./phonebook.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "components/redux/selectors";
import { addContactThunk } from "components/redux/thunks";

 export const ContactForm = () => {
   const dispatch = useDispatch();
   const { items } = useSelector(getContacts);
   
   const submitForm = e => {
    e.preventDefault();
     const form = e.target;
     const name = form.elements.name.value;
     const phone = form.elements.number.value
     const body = {
            name,
            phone,
     };

     const contactExists = items.some(contact => contact.name === name);

      if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContactThunk(body));
      form.reset();
    }
   };
 
  return (
    <div>
      <form className={css.form} onSubmit={submitForm}>
      <label> Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </label>
      <label> Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </label>
      <button className={css.button}>Add contact</button>
      </form>
    </div>
  )
}