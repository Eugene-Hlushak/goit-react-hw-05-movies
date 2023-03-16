import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form, SearchInput, Button } from './SearchForm.styled';
const SearchForm = ({ movieName }) => {
  const [query, setQuery] = useState('');

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  const startSearch = e => {
    e.preventDefault();
    if (!query) {
      alert('Empty request!');
      return;
    }
    movieName(query);
    setQuery('');
  };

  return (
    <Form onSubmit={startSearch}>
      <SearchInput type="text" value={query} onChange={changeHandler} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
SearchForm.propTypes = {
  movieName: PropTypes.func.isRequired,
};
export default SearchForm;
