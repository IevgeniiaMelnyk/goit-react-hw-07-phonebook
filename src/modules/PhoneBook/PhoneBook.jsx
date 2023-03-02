import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/contacts-selectors';
import Section from 'shared/components/Section/Section';
import Filter from 'modules/Filter/Filter';
import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'modules/ContactList/ContactList';
import Spinner from 'shared/components/Spinner/Spinner';
import { Box, ManeBox } from './PhoneBook.staled';

const PhoneBook = () => {
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  return (
    <ManeBox>
      {loading && !error && <Spinner/>}
      <Section title="Phone Book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Box>
          <Filter text="Find contacts by name" />
          <ContactList />
        </Box>
      </Section>
    </ManeBox>
  );
};

export default PhoneBook;
