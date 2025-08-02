import { useState} from 'react';
import './Question.css';
import plus from '../../Images/Property 1=plus.png';
import minus from '../../Images/Property 1=minus.png';

const arrows = [plus, minus];

function Question({ number, question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="questions"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h4>Q{number}. {question}
                <img
                    src={isOpen? arrows[1] : arrows[0]} // changes plus to minus when closed or open
                    alt={isOpen? 'Cross' : 'Minus'}
                    className="arrow"         
                />
            </h4>

            <div className={`answer ${isOpen ? 'open' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Question;