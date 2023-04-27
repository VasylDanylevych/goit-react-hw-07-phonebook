import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.style';
import PropTypes from 'prop-types';
import { filterContact } from 'redux/filterCounterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChangeFilter = evt => {
    const value = evt.target.value;
    dispatch(filterContact(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
