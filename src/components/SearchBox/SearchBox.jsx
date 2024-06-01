import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleSearch = e => {
    const value = e.target.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <div className={css.search_container}>
      <p>Find contacts by name</p>
      <input className={css.search_field} type="text" onChange={handleSearch} />
    </div>
  );
}
