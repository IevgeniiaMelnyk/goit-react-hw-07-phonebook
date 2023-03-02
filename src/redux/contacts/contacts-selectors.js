export const getFilterContacts = ({ contacts: {contacts}, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const getIsLoading = ({contacts}) => contacts.loading;
export const getError = ({contacts}) => contacts.error;
