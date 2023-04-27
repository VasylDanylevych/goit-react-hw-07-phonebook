import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.style';
import PropTypes from 'prop-types';
import { deleteContactThunk, fetchContactsThunk } from 'redux/thunk';
import ContactsApi from 'services/contactsApi';
import { useEffect } from 'react';

const contactsApi = new ContactsApi();

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    function fetch() {
      try {
        dispatch(fetchContactsThunk());
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getFilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContact.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <button onClick={() => dispatch(deleteContactThunk(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
