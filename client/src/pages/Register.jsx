import { useState } from "react";
import styled from "styled-components";

import TextInput from "../components/TextInput";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      const result = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return await result.json();
    } else {
      alert("Invalid input");
    }
  };
  return (
    <RegisterForm autoComplete='off' onSubmit={handleSubmit}>
      <h2>Create a new account</h2>
      <span>Already have an account?</span>
      <a href='/profile'>Sign in</a>
      <TextInput name='name' value={user.name} onInputChange={handleChange}>
        Full name
      </TextInput>
      <TextInput name='email' value={user.email} onInputChange={handleChange}>
        Email
      </TextInput>
      <TextInput
        name='password'
        value={user.password}
        onInputChange={handleChange}>
        Password
      </TextInput>
      <button type='submit'>Register</button>
    </RegisterForm>
  );
}

export default Register;

const RegisterForm = styled.form`
  margin: 7rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: var(--third-c);
  color: black;
  box-shadow: 3px 3px 5px #6b6b6b;
  position: relative;
`;
