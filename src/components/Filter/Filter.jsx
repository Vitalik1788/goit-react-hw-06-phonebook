import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from '../../redux/filterReducer';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name{' '}
      <FilterInput
        id="filter"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </FilterLabel>
  );
};

export default Filter;
