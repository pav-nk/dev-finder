import React from 'react';
import SearchIcon from '../../assets/icon-search.svg'
import styles from './Search.module.scss';
import { Button } from '../Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }


  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <img src={SearchIcon} alt="search icon" />
        </label>
        <input type="text" className={styles.textField} id='search' name='username' placeholder='Search Github username ...' />
        {hasError && (
          <p className={styles.error}>No result</p>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )

};
