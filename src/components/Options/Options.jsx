function Options({ updateFeedback }) {
    return (
        <div className="Options">
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>
        </div>
    );
}

export default Options;