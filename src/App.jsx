import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quizcards from "../components/Quizcards";
import Bookmarks from "../pages/Bookmarks";
import NewCard from "../pages/NewCard";
import Profile from "../pages/Profile";
import { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState();

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
    console.log(questionPromises);
    setQuestions(questionPromises);
  }
  useEffect(() => {
    initialQuestions();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Footer />
      <Routes>
        <Route path='/' element={<Quizcards allQuestions={questions} />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/new-card' element={<NewCard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

//https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple QUIZ API
