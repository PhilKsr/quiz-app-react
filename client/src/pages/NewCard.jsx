import { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";

function NewCard() {
  const initialQuestion = {
    category: "",
    question: "",
    answers: [],
  };
  const [questionToAdd, setQuestionToAdd] = useState(initialQuestion);

  return (
    <NewQuestionCard>
      <form className='new'>
        <h3> Choose the category:</h3>
        <select name='category'>
          <option>-- Choose wisely --</option>
        </select>

        <TextInput value={questionToAdd.question} name='question'>
          Add new question
        </TextInput>

        <h3>Add the possible answers:</h3>
        <TextInput value={questionToAdd.answers[0]} name='answer'>
          Correct answer
        </TextInput>
        <TextInput value={questionToAdd.answers[1]} name='answer'>
          Wrong answer
        </TextInput>
        <TextInput value={questionToAdd.answers[2]} name='answer'>
          Wrong answer
        </TextInput>
        <TextInput value={questionToAdd.answers[3]} name='answer'>
          Wrong answer
        </TextInput>

        <button type='submit' className='new__go'>
          Here we go!
        </button>
      </form>
    </NewQuestionCard>
  );
}

export default NewCard;

const NewQuestionCard = styled.section`
  margin: 7rem 1rem;

  .new {
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
  }
  .new h3 {
    padding: 5px;
    text-align: center;
    margin-top: 20px;
  }
  .new__go {
    border: 1px solid var(--correct-c);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: var(--correct-c);
    font-family: "Patrick Hand", cursive;
    font-size: 17px;
  }
  .new__go:hover {
    background-color: #5e8d6d;
    border: 1px solid #5e8d6d;
  }

  .new__go:active {
    transform: scale(1.2);
    transition: transform 0.2s ease;
  }

  .new input:focus {
    border: 2px solid var(--correct-c);
    border-radius: 5px;
    outline: none;
  }

  label {
    padding-top: 5px;
  }
`;
