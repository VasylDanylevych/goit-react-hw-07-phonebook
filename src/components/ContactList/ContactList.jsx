import { useDispatch, useSelector } from 'react-redux';
import { List } from './ContactList.style';
// import PropTypes from 'prop-types';
import { deleteContactThunk, fetchContactsThunk } from 'redux/thunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.contacts);
  console.log('items: ', items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getFilteredContacts(items, filter);

  return (
    <>
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
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
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   deleteContact: PropTypes.func,
// };
