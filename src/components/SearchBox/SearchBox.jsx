import css from './SearchBox.module.css';
import { useSelector } from "react-redux";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.search_container}>
      <p>Find contacts by name</p>
      <input
        className={css.search_field}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
