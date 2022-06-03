import React, { useState } from "react"
import QuizPage from "./pages/QuizPage"
import StartPage from "./pages/StartPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style.css'
import Navbar from "./components/navbar/Navbar"


export default function App(){
    const [quizQuantity, setQuizQuantity] = useState(5)
    const [difficulty, setDifficulty] = useState('easy')
  
    
    
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route 
                    path="/" 
                    element={<StartPage 
                        quizQuantity={quizQuantity} 
                        setQuizQuantity={setQuizQuantity} 
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                    />}
                    // exact={true}

                />
                    
                <Route 
                    path="/quiz" 
                    element={<QuizPage key={Date.now()} quizQuantity={quizQuantity} difficulty={difficulty}/>}
                />
                {/* <Route 
                    path="*" 
                    element={<StartPage
                        quizQuantity={quizQuantity} 
                        setQuizQuantity={setQuizQuantity} 
                        difficulty={difficulty}
                        setDifficulty={setDifficulty} 
                    />}
                    exact={true}
                /> */}
            </Routes>
        </BrowserRouter>
    )
}
