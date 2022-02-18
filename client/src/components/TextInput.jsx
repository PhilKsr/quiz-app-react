import styled from "styled-components";

function TextInput({ value, name, children, type, onInputChange }) {
  return (
    <>
      <Label htmlFor={name}>{children}</Label>
      <Input
        value={value}
        type={type ? { type } : "text"}
        name={name}
        onChange={onInputChange}
      />
    </>
  );
}

export default TextInput;

const Label = styled.label`
  padding-top: 5px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
`;
