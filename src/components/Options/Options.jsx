import styles from './Options.module.css';

function Options({ updateFeedback, resetFeedback, totalFeedback }) {
    return (
        <div className="Options">
            <button className={styles.button} onClick={() => updateFeedback('good')}>Good</button>
            <button className={styles.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={styles.button} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && (
                <button className={styles.resetButton} onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
}

export default Options;