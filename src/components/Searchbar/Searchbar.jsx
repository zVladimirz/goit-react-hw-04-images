import PropTypes from 'prop-types';

import { Formik } from 'formik';
import {
  Input,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchbarStyled,
  SearchForm,
} from './Searchbar.styled';

const initialValues = {
  searchQueryForm: '',
};

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <SearchForm autoComplete="off">
          <SearchFormButton type="submit" aria-label="Search images">
            <SearchFormButtonLabel />
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQueryForm"
          />
        </SearchForm>
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
