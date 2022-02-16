import { useState } from "react/cjs/react.production.min";
import styled from "styled-components";

function NewCard() {
  const initialQuestion = {
    category: "",
    question: "",
    answers: [],
  };
  const [questionToAdd, setQuestionToAdd] = useState(initialQuestion);
  return (
    <NewQuestionCard>
      <form action='' className='new'>
        <h3> Choose the category:</h3>
        <select name='category' id=''>
          <option>-- Choose wisely --</option>
        </select>
        <h3>Add a new Question:</h3>
        <input
          value={initialQuestion.question}
          type='text'
          name='new__question'
          className='new__question'
        />
        <h3>Add the possible answers:</h3>
        <label htmlFor='new__answer1'>Correct</label>
        <input
          value={initialQuestion.answers[0]}
          type='text'
          name='new__answer1'
          className='new__answer'
        />
        <label htmlFor='new__answer1'>Wrong</label>
        <input
          value={initialQuestion.answers[1]}
          type='text'
          name='new__answer2'
          className='new__answer'
        />
        <label htmlFor='new__answer1'>Wrong</label>
        <input
          value={initialQuestion.answers[2]}
          type='text'
          name='new__answer3'
          className='new__answer'
        />
        <label htmlFor='new__answer1'>Wrong</label>
        <input
          value={initialQuestion.answers[3]}
          type='text'
          name='new__answer4'
          className='new__answer'
        />
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

  .new__answer {
    margin-bottom: 10px;
    width: 100px;
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
