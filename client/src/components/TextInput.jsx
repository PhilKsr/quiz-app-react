function TextInput({ value, name, children, onInputChange }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input value={value} type='text' name={name} onChange={onInputChange} />
    </>
  );
}

export default TextInput;
