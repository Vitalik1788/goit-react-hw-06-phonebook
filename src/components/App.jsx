import { nanoid } from 'nanoid';
import { Container, Title, ContactListTitle } from './App/App.styled';
import Form from './Form/Form';
import ContactsList from './Contact__List/Contact__List';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addUserContact } from 'redux/contactsReducer';
import { filteredUserContact } from 'redux/filterReducer';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = name.toLowerCase().trim();
    if (
      contacts !== null &&
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addUserContact(contact));
  };

  const onFilteredContact = () => {
    if (contacts) {
      const normalizedFilter = filter.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContact = onFilteredContact();

  return (
    <Container>
      <Title>My Phonebook</Title>

      <Form onFormSubmit={addContact} />

      <ContactListTitle> My contacts list</ContactListTitle>

      <Filter
        value={filter}
        onChange={e => dispatch(filteredUserContact(e.currentTarget.value))}
      />

      <ContactsList contacts={filteredContact} />
    </Container>
  );
};

export default App;
