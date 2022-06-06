import React, {useState, useEffect} from "react"
import Confetti from "react-confetti"
import Question from "../components/Question"
import axios from "axios"
import Loader from "../components/UI/Loader/Loader"

export default function QuizPage({ quizQuantity, category, difficulty}) {
    const [allQuestions,setAllQuestions] = useState([])
    const [isFinished, setIsFinished] = useState(false)
    const [score, setScore] = useState(0)
    const [newQuiz, setNewQuiz] = useState(false)
    const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore")||0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (score > bestScore) localStorage.setItem("bestScore", JSON.stringify(score))
    }, [score])

    useEffect(() => {
        setBestScore(parseInt(localStorage.getItem("bestScore"))||0)
    }, [newQuiz])
    
    // ** questions are obtianed from https://opentdb.com/  opensourse database **
    useEffect(() => {
        // setIsLoading(true)
        // fetch(`https://opentdb.com/api.php?amount=${quizQuantity}&category=${category}&difficulty=${difficulty}&type=multiple`)
        //     .then(resp => resp.json())
        //     .then(data => setAllQuestions(data.results))
        fetchQuestions()
    }, [newQuiz])
    
    async function fetchQuestions() {
        setIsLoading(true)
        const resp = await axios.get(`https://opentdb.com/api.php?amount=${quizQuantity}&category=${category}&difficulty=${difficulty}&type=multiple`)
        setAllQuestions(resp.data.results)
        setIsLoading(false)
    }

    function checkAnswers(){
        for (let i = 0; i < allQuestions.length; i++){
            if (allQuestions[i].correct_answer === allQuestions[i].chosen) {
                setScore(score => score + 1)
            } 
        }
        setIsFinished(true)
    }    
    function playAgain() {
        setNewQuiz(prev => !prev)
        setScore(0)
        setIsFinished(false)
    }

    function choose(answeredQuestion, chosenAnswer){
        if (!isFinished) {
            setAllQuestions(prev => prev.map(Q => {
                return Q.question === answeredQuestion ? {...Q, chosen: chosenAnswer} : Q
                })
            )
        }
    }  
    return (
        <div className="quiz-page">
            <div style={{textAlign: "center", color: "#293264"}}>
                <h1>Quiz</h1>
                <h3>Difficulty level: {difficulty}</h3>
            </div>
            <div>
                <ol>
                    {isLoading 
                        ?
                        <Loader/>
                        :
                        allQuestions.map( item => (
                                <li key={item.correct_answer}>
                                    <Question 
                                        question={item}
                                        choose={choose}
                                        isFinished={isFinished}
                                    />
                                </li>
                            )
                        )
                    }
                </ol>
                <div style={{textAlign: 'center'}}>
                    {isFinished && <h4>Your score: {score}/{allQuestions.length}</h4>}
                    {score > bestScore 
                        ? 
                        <div>
                            <Confetti width={window.innerHeight || 200} height={window.innerHeight || 200}></Confetti>
                            <h4>You beat the Best Score</h4> 
                        </div>
                        : 
                        <h4>Best score: {bestScore}</h4>
                    }   
                </div>

                {isFinished 
                    ? 
                    <button className="btn" onClick={playAgain}>Play again</button>
                    :
                    <button className="btn" onClick={checkAnswers}>Check answers</button> 
                }
            </div>
        </div>
    )
}