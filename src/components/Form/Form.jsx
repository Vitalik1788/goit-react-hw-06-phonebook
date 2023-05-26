import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  NameFormLabel,
  FormNameInput,
  FormSubmitBtn,
  NumberFormLabel,
  FormNumberInput,
} from './Form.styled';

const Form = ({onFormSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
    onFormSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer autoComplete="off" onSubmit={onSubmitForm}>
      <NameFormLabel htmlFor="name"> Name </NameFormLabel>
      <FormNameInput
        id="name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        onChange={e => setName(e.currentTarget.value)}
      />
      <NumberFormLabel htmlFor="number">Phone number</NumberFormLabel>
      <FormNumberInput
        id="number"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        onChange={e => setNumber(e.currentTarget.value)}
      />

      <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
    </FormContainer>
  );
};

export default Form;

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
