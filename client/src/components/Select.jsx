function SelectMenu({ onSelectChange, allQuestions }) {
  const categories = Array.from(
    new Set(allQuestions.map((question) => question.category))
  );

  return (
    <>
      <label htmlFor='category'> Choose the category:</label>
      <select name='category' onChange={onSelectChange}>
        <option>-- Choose wisely --</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectMenu;
