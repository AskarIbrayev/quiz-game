import { useState } from 'react'
import { Link } from "react-router-dom";
import MySelect from '../components/UI/MySelect';

 export default function QuizPage({ quizQuantity, setQuizQuantity, difficulty, setDifficulty}) {

    return (
        <div className="start-page">
            <div>
                <h1>Quiz Game</h1>
                <p>Answer random question test your knowledge</p>
                <MySelect 
                    value={difficulty} 
                    defaultValue={'easy'}
                    title={'Difficulty'} 
                    onChange={(event) => setDifficulty(event.target.value)}
                    options={[{value: 'easy', name: 'Easy'}, {value: 'medium', name: 'Meidum'}, {value: 'hard', name: 'Hard'}]}
                    />
                <MySelect 
                    value={quizQuantity} 
                    defaultValue={5}
                    title={'Number of questions'}
                    onChange={(event) => setQuizQuantity(event.target.value)}
                    options={[{value: 5, name: '5'}, {value: 10, name: '10'}, {value: 15, name: '15'}, {value: 20, name: '20'}]}
                    
                />
                {/* <select value={difficulty}  onChange={(event) => setDifficulty(event.target.value)}>
                    <option disabled value={''}>Difficulty</option>
                    <option value={'easy'}>Easy</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'hard'}>hard</option>
                </select> */}
                {/* <select value={quizQuantity}  onChange={(event) => setQuizQuantity(event.target.value)}>
                    <option disabled value={0}>Number of questions</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select> */}
                <Link style={{textDecoration: 'none'}} to={"/quiz"}>
                    <button className="btn" >Start Quiz</button>
                </Link>
            </div>
        </div>
    ) 
 }