import { ContactItem, DeleteBtn } from './Contact__List.styled';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { removeUserContact } from 'redux/contactsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <BsFillBookmarkCheckFill
              style={{ color: 'blue', marginRight: '15px' }}
            />
            {name}: {number}
            <DeleteBtn
              type="button"
              onClick={() => dispatch(removeUserContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactsList;
