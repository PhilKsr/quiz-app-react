import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quizcards from "./components/Quizcards";
import NewCard from "./pages/NewCard";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { loadFromLocal, saveToLocal } from "./lib/localStorage";

function App() {
  const [questions, setQuestions] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [addedQuestions, setAddedQuestions] = useState([]);

  const getInitialQuestions = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=15&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    const questionPromises = await data.results.map((oneQuestion) => {
      return {
        category: oneQuestion.category,
        question: oneQuestion.question,
        answers: [
          oneQuestion.correct_answer,
          oneQuestion.incorrect_answers[0],
          oneQuestion.incorrect_answers[1],
          oneQuestion.incorrect_answers[2],
        ],
      };
    });
    const resAdded = await fetch("http://localhost:5000/api/question");
    const dataAdded = await resAdded.json();

    const result = questionPromises.concat(dataAdded);
    setQuestions(result);
  };

  const saveNewQuestion = async (newQuestion) => {
    const result = await fetch("http://localhost:5000/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    });
    return await result.json();
  };

  useEffect(() => {
    getInitialQuestions();
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

  const addQuestion = (newQuestion) => {
    setAddedQuestions([...addedQuestions, newQuestion]);
    saveNewQuestion(newQuestion);
  };

  useEffect(() => {
    getInitialQuestions();
  }, [addedQuestions]);

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
        <Route
          path='/new-card'
          element={<NewCard onAddQuestion={addQuestion} />}
        />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
