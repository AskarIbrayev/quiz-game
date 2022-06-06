import { Link } from "react-router-dom";
import MySelect from '../components/UI/MySelect';

 export default function QuizPage({ quizQuantity, setQuizQuantity, difficulty, setDifficulty, category, setCategory}) {

    return (
        <div className="start-page">
            <div>
                <h1>Quiz Game</h1>
                <p>Answer random questions and test your knowledge</p>
                <MySelect 
                    value={category} 
                    defaultValue={9}
                    title={'Category'}
                    onChange={(event) => setCategory(event.target.value)}
                    options={[{value: 18, name: 'Computer Science'}, {value: 11, name: 'Entertainment: Film'}, {value: 9, name: 'General knowledge'}, {value: 22, name: 'Geography'}]}
                />
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
                
                <button className="btn" >
                    <Link style={{textDecoration: 'none',color:"inherit"}} to={"/quiz-game/quiz"}>Start Quiz</Link>
                </button>
                
            </div>
        </div>
    ) 
 }