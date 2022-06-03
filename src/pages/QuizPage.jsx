import React, {useState, useEffect} from "react"
import Question from "../components/Question"

export default function QuizPage({ quizQuantity, difficulty}) {
    const [allQuestions,setAllQuestions] = useState([])
    const [isFinished, setIsFinished] = useState(false)
    const [score, setScore] = useState(0)
    const [newQuiz, setNewQuiz] = useState(false)
    const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore")||0)

    useEffect(() => {
        if (score > bestScore) localStorage.setItem("bestScore", JSON.stringify(score))
    }, [score])

    useEffect(() => {
        setBestScore(parseInt(localStorage.getItem("bestScore")))
    }, [newQuiz])
    
    // ** questions are obtianed from https://opentdb.com/  opensourse database **
    useEffect(() => {
            fetch(`https://opentdb.com/api.php?amount=${quizQuantity}&category=9&difficulty=${difficulty}&type=multiple`)
                .then(resp => resp.json())
                .then(data => setAllQuestions(data.results))
    }, [newQuiz])

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
            <div style={{textAlign: "center"}}>
                <h1>Quiz</h1>
                <h3>Difficulty level: {difficulty}</h3>
            </div>
            <div>
                <ol>
                    {allQuestions.map( item => (
                            <li key={item.correct_answer}>
                                <Question 
                                    question={item}
                                    choose={choose}
                                    isFinished={isFinished}
                                />
                            </li>
                        )
                    )}
                </ol>
                {isFinished && <h4>You scored {score}/{allQuestions.length} correct answers</h4>}
                {score > bestScore ? <h4>You beat the Best Score</h4> : <h4>Best score: {bestScore}</h4>}

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