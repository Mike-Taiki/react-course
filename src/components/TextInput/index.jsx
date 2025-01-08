import "./styles.css";

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
