import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <div className="App">
            <Description />
            <Options feedback={feedback} setFeedback={setFeedback} />
            <Feedback feedback={feedback} />
        </div>
    );
}

export default App;