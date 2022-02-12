import styled from "styled-components";
import bookmark_inactive from "../images/bookmark_inactive.svg";
import bookmark_active from "../images/bookmark_active.svg";

function Quizcards({ allQuestions, onAddToFavourites, allFavourites }) {
  const random = (a, b) => 0.5 * Math.random();

  return (
    <>
      {allQuestions?.map((question, index) => (
        <AppCard key={index}>
          <h3 className='card__h2'>Category: {question.category}</h3>
          <button
            className='card__fav card__fav--new'
            onClick={() => onAddToFavourites(question)}>
            <img
              src={
                allFavourites?.some(
                  (favQuestion) => favQuestion.question === question.question
                )
                  ? bookmark_active
                  : bookmark_inactive
              }
            />
          </button>
          <h4 className='card__h3'>{question.question}</h4>
          <ul className='card__tag'>
            {Object.values(question.answers)
              .sort(random)
              .map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
          </ul>
        </AppCard>
      ))}
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
    transform: scale(1.2);
  }

  .card__fav--new {
    img {
      fill: black;
    }
  }
`;
