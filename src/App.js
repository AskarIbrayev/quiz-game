import React, { useState } from "react"
import QuizPage from "./pages/QuizPage"
import StartPage from "./pages/StartPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style.css'
import Navbar from "./components/navbar/Navbar"
import ErrorPage from "./pages/ErrorPage"


export default function App(){
    const [quizQuantity, setQuizQuantity] = useState(5)
    const [difficulty, setDifficulty] = useState('easy')
    const [category, setCategory] = useState(18)
  
    
    
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route 
                    path="/quiz-game/" 
                    element={<StartPage 
                        quizQuantity={quizQuantity} 
                        setQuizQuantity={setQuizQuantity} 
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        category={category}
                        setCategory={setCategory}
                    />}
                />
                    
                <Route 
                    path="/quiz-game/quiz"
                    element={<QuizPage 
                                quizQuantity={quizQuantity} 
                                difficulty={difficulty} 
                                category={category}
                            />}
                />
                <Route 
                    path="*" 
                    element={<ErrorPage />}
                    exact={true}
                />
            </Routes>
        </BrowserRouter>
    )
}
