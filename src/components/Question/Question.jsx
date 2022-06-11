import React from 'react'
import './questionStyles.css'


export default function Question({question, choose,isFinished}){

    const correctAnswerElement = createAnswerElement(question.correct_answer, true)
    const incorrectAnswerElement = question.incorrect_answers.map(item => createAnswerElement(item, false))
    
    function createAnswerElement(answer, isCorrect) {
        const answerClassName = `answer 
            ${question.chosen === answer && "selected"} 
            ${isFinished && isCorrect ? "correct" : ""}
            ${isFinished && isCorrect && question.chosen === answer ? "chosen_and_correct" : ""}
            ${isFinished && !isCorrect && question.chosen === answer ? "incorrect" : ""}`
        return (
            <span 
                key={!isCorrect && answer}
                className={answerClassName} 
                onClick={() => choose(question.question, answer)}
            >
                {answer}
            </span>
        )
    }
    
    //randomize
    const answersArray = [correctAnswerElement, ...incorrectAnswerElement]
    const [randomIndex, setRandomIndex] = React.useState(shuffleArray([0,1,2,3]))

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    
    return (
        <div className="question-item">
            <h3 className="question">{question.question}</h3>
            {randomIndex.map(index => answersArray[index])}               
        </div>
    )
}