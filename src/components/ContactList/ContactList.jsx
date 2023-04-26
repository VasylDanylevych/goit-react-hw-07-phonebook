import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.style';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
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
