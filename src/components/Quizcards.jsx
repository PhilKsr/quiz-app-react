import styled from "styled-components";
import bookmark_inactive from "../images/bookmark_inactive.svg";
import bookmark_active from "../images/bookmark_active.svg";
import { random } from "../lib/sortRandom";
import Modal from "./modal";
import { useState } from "react";

function Quizcards({ allCards, onAddToFavourites, allFavourites }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [rateAnswer, setRateAnswer] = useState(false);
  const onShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const onRateAnswer = (answer, index) => {
    if (answer === allCards[index].answers.correct) {
      setRateAnswer(true);
    } else {
      setRateAnswer(false);
    }
  };

  return (
    <>
      {allCards?.map((question, cardIndex) => (
        <AppCard key={cardIndex}>
          <h3 className='card__h2'>Category: {question.category}</h3>
          <button
            className='card__fav card__fav--new'
            onClick={() => onAddToFavourites(question)}>
            <img
              src={
                allFavourites
                  ? allFavourites?.some(
                      (favQuestion) =>
                        favQuestion.question === question.question
                    )
                    ? bookmark_active
                    : bookmark_inactive
                  : bookmark_active
              }
            />
          </button>
          <h4 className='card__h3'>{question.question}</h4>
          <ul className='card__tag'>
            {Object.values(question.answers)
              .sort(random)
              .map((answer, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onShowAnswer();
                    onRateAnswer(answer, cardIndex);
                  }}>
                  {answer}
                </li>
              ))}
          </ul>
        </AppCard>
      ))}
      {showAnswer && (
        <Modal onShowAnswer={onShowAnswer}>
          {rateAnswer ? "correct 🙂" : "not correct 🙁"}
        </Modal>
      )}
    </>
  );
}

export default Quizcards;

const AppCard = styled.section`
  :first-of-type {
    margin-top: 7rem;
  }
  :last-of-type {
    margin-bottom: 7rem;
  }
  margin: 2rem 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  background-color: var(--third-c);
  color: black;
  box-shadow: 3px 3px 5px #6b6b6b;
  position: relative;

  .card__h2 {
    max-width: 20rem;
  }

  .card__tag {
    list-style: upper-alpha;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
  }

  .card__tag li {
    border: solid 1px lightcoral;
    border-radius: 5px;
    list-style-position: inside;
    margin: 5px;
    padding: 5px;
    width: 120px;
    background-color: #dfe7fd;
    color: black;
    font-size: 15px;
  }

  .card__fav {
    border: none;
    background-color: var(--third-c);
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0;
  }

  .card__fav--new {
    img {
      fill: black;
    }
  }
`;
