import { useState } from "react";
import styled from "styled-components";
import SelectMenu from "../components/Select";
import TextInput from "../components/TextInput";

function NewCard({ onAddQuestion, allQuestions }) {
  const initialQuestion = {
    category: "",
    question: "",
    answers: { correct: "", wrongOne: "", wrongTwo: "", wrongThree: "" },
  };
  const [questionToAdd, setQuestionToAdd] = useState(initialQuestion);

  const handleChange = (event) => {
    setQuestionToAdd({
      ...questionToAdd,
      [event.target.name]: event.target.value,
    });
  };

  const handleAnswerChange = (event) => {
    const temporaryAnswers = {
      ...questionToAdd.answers,
      [event.target.name]: event.target.value,
    };
    setQuestionToAdd({ ...questionToAdd, answers: temporaryAnswers });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
      ...questionToAdd,
      answers: [
        questionToAdd.answers.correct,
        questionToAdd.answers.wrongOne,
        questionToAdd.answers.wrongTwo,
        questionToAdd.answers.wrongThree,
      ],
    };
    onAddQuestion(newQuestion);
    setQuestionToAdd(initialQuestion);
  };

  return (
    <NewQuestionCard>
      <form className='new' onSubmit={handleSubmit}>
        <h3>Add a new question-card</h3>
        <SelectMenu onSelectChange={handleChange} allQuestions={allQuestions} />

        <TextInput
          value={questionToAdd.question}
          name='question'
          onInputChange={handleChange}
          required>
          Question
        </TextInput>

        <TextInput
          value={questionToAdd.answers.correct}
          name={Object.keys(questionToAdd.answers)[0]}
          onInputChange={handleAnswerChange}
          required>
          Correct answer
        </TextInput>
        <TextInput
          value={questionToAdd.answers.wrongOne}
          name={Object.keys(questionToAdd.answers)[1]}
          onInputChange={handleAnswerChange}
          required>
          Wrong answer
        </TextInput>
        <TextInput
          value={questionToAdd.answers.wrongTwo}
          name={Object.keys(questionToAdd.answers)[2]}
          onInputChange={handleAnswerChange}
          required>
          Wrong answer
        </TextInput>
        <TextInput
          value={questionToAdd.answers.wrongThree}
          name={Object.keys(questionToAdd.answers)[3]}
          onInputChange={handleAnswerChange}
          required>
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
`;
