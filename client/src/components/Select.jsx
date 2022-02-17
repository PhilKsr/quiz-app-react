function SelectMenu({ onSelectChange }) {
  return (
    <>
      <label htmlFor='category'> Choose the category:</label>
      <select name='category' onChange={onSelectChange}>
        <option>-- Choose wisely --</option>
      </select>
    </>
  );
}

export default SelectMenu;
