function TextInput({ value, name, children }) {
  return (
    <>
      <label htmlfor={name}>{children}</label>
      <input value={value} type='text' name={name} />
    </>
  );
}

export default TextInput;
