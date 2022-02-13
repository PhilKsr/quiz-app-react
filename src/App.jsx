import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quizcards from "./components/Quizcards";
import NewCard from "./pages/NewCard";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState();
  const [favourites, setFavourites] = useState([]);

  async function initialQuestions() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    const questionPromises = await data.results.map((oneQuestion) => {
      return {
        category: oneQuestion.category,
        question: oneQuestion.question,
        answers: {
          correct: oneQuestion.correct_answer,
          incorrectFirst: oneQuestion.incorrect_answers[0],
          incorrectSecond: oneQuestion.incorrect_answers[1],
          incorrectThird: oneQuestion.incorrect_answers[2],
        },
      };
    });
    setQuestions(questionPromises);
  }
  useEffect(() => {
    initialQuestions();
  }, []);

  const addToFavourites = (favQuestion) => {
    if (
      favourites.some(
        (favourite) => favourite.question === favQuestion.question
      )
    ) {
      setFavourites(
        favourites.filter(
          (favourite) => favourite.question !== favQuestion.question
        )
      );
    } else {
      setFavourites([...favourites, favQuestion]);
    }
  };

  return (
    <div className='App'>
      <Header />
      <Footer />
      <Routes>
        <Route
          path='/'
          element={
            <Quizcards
              allCards={questions}
              onAddToFavourites={addToFavourites}
              allFavourites={favourites}
            />
          }
        />
        <Route
          path='/bookmarks'
          element={
            <Quizcards
              allCards={favourites}
              onAddToFavourites={addToFavourites}
            />
          }
        />
        <Route path='/new-card' element={<NewCard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

//https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple QUIZ API
