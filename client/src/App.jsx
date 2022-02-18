import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quizcards from "./components/Quizcards";
import NewCard from "./pages/NewCard";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [questions, setQuestions] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [addedQuestions, setAddedQuestions] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

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
    const resAdded = await fetch("/api/questions");
    const dataAdded = await resAdded.json();

    const result = questionPromises.concat(dataAdded);
    setQuestions(result);
  };

  const saveNewQuestion = async (newQuestion) => {
    const result = await fetch("/api/questions", {
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
      <Footer loggedIn={loggedIn} />
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
          element={
            <NewCard onAddQuestion={addQuestion} allQuestions={questions} />
          }
        />
        <Route
          path='/profile'
          element={
            loggedIn ? (
              <Profile onHandleLogout={handleLogin} />
            ) : (
              <Login onHandleLogin={handleLogin} />
            )
          }
        />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
