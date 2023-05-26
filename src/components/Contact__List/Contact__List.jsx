import PropTypes from 'prop-types';
import { ContactItem, DeleteBtn } from "./Contact__List.styled";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const ContactsList = ({ contacts, onDeleteContact } ) => {
  return (
    <ul>
      {contacts && contacts.map(({id, name, number}) => {
        return (
          <ContactItem key={id}>
            <BsFillBookmarkCheckFill style={{ color: "blue", marginRight: "15px"}} />
            {name}: {number}
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
          </ContactItem>
        )
      })}
    </ul>
  )
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
}