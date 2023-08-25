import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import img from '../../../assets/img-home.jpg';
import { useState } from "react";
import './homeQuestions.css'

const HomeQuestions = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const toggleAnswer = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index)
    }
    const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="plus-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>;

    const lessIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="less-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
    return (
        <div className='questions-container'>
            <ContentBlock
                className="questions"
                title="¿Querés adoptar pero tenes dudas?"
                url={img}>
                <li className='question-1' onClick={() => toggleAnswer(1)}
                    selected={selectedQuestion === 1}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 1 ?  plusIcon  :  lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio completar el formulario de adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 1 ? 'show-answer' : 'answer'}`} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tenetur reiciendis officia perferendis tempora quaerat, eveniet eius, harum deleniti nisi velit maiores repellendus quam porro culpa! Unde architecto rem necessitatibus?
                    </p>
                </li>
                <li className='question-2' onClick={() => toggleAnswer(2)}
                    selected={selectedQuestion === 2}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 2 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio completar el formulario de adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 2 ? 'show-answer' : 'answer'}`} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tenetur reiciendis officia perferendis tempora quaerat, eveniet eius, harum deleniti nisi velit maiores repellendus quam porro culpa! Unde architecto rem necessitatibus?
                    </p>
                </li>
                <li className='question-3' onClick={() => toggleAnswer(3)}
                    selected={selectedQuestion === 3}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 3 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio completar el formulario de adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 3 ? 'show-answer' : 'answer'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tenetur reiciendis officia perferendis tempora quaerat, eveniet eius, harum deleniti nisi velit maiores repellendus quam porro culpa! Unde architecto rem necessitatibus?
                    </p>
                </li>
                <li className='question-4' onClick={() => toggleAnswer(4)}
                    selected={selectedQuestion === 4}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 4 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio completar el formulario de adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 4 ? 'show-answer' : 'answer'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis tenetur reiciendis officia perferendis tempora quaerat, eveniet eius, harum deleniti nisi velit maiores repellendus quam porro culpa! Unde architecto rem necessitatibus?
                    </p>
                </li>
            </ContentBlock>
        </div>
    )
}
export default HomeQuestions;