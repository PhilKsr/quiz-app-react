import { useState } from "react";
import styled from "styled-components";

import TextInput from "../components/TextInput";

function Login({ onHandleLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resAdded = await fetch(
      `/api/login?email=${user.email}&password=${user.password}`
    );
    const registeredUser = await resAdded.json();
    if (
      (registeredUser.email === user.email) &
      (registeredUser.password === user.password)
    ) {
      onHandleLogin();
    }
  };

  return (
    <LoginForm autoComplete='off' onSubmit={handleSubmit}>
      <h2>Login to your account</h2>
      <TextInput name='email' value={user.email} onInputChange={handleChange}>
        Email
      </TextInput>
      <TextInput
        type='password'
        name='password'
        value={user.password}
        onInputChange={handleChange}>
        Password
      </TextInput>
      <button type='submit'>Login</button>
      <a href='/register'>I don't have an account</a>
    </LoginForm>
  );
}

export default Login;

const LoginForm = styled.form`
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
