import styled from "styled-components";

function Bookmarks() {
  return (
    <AppFavourite className='card'>
      <h3 className='card__h2'>Question 2</h3>
      <button id='q2' className='card__fav'>
        <img src='Bild' />
      </button>
      <h4 className='card__h3'>
        Which two words traditionally appear onscreen at the termination of a
        feature film?
      </h4>
      <ul className='card__tag'>
        <li className='card__correct'>The End</li>
        <li>The conclusion</li>
        <li>The Finish</li>
        <li>The Pizza-rolls are done</li>
      </ul>
      <details className='card__answer'>
        <summary>Hint</summary>
        <p>The moment we hope D. is also correct.</p>
      </details>
    </AppFavourite>
  );
}

export default Bookmarks;

const AppFavourite = styled.section`
  margin: 100px 20px 60px 20px;
  font-size: 16px;
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
    right: 15px;
    top: 5px;
    padding: 0;
  }

  .card__fav:hover {
    background-image: url("");
    background-size: 100%;
  }

  .card__fav:focus {
    background-image: url("");
    background-size: 100%;
  }
`;
