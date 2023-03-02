import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from 'shared/components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const elements = contacts.map(({ id, name, phone }) => {
    return (
      <Item key={id}>
        <ContactItem
          name={name}
          number={phone}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      </Item>
    );
  });

  return <>{contacts.length > 0 && <List>{elements}</List>};</>;
};

export default ContactList;
