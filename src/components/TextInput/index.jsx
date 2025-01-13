import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, actionFn }) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={actionFn}
      value={searchValue}
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
