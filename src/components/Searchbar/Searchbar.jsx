import { useState } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputForSearch, setInputForSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputForSearch);
    setInputForSearch('');
  };

  const handleChange = ({ currentTarget }) => {
    setInputForSearch(currentTarget.value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="inputForSearch"
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: propTypes.func,
};