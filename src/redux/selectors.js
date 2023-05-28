export const selectContacts = ({ contacts }) => contacts;

export const selectFilter = ({ filter }) => filter;

export const selectVisibleContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
