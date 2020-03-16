import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) => (
    <>
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackGood}>Good</button>
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackNeutral}>Neutral</button>
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackBad}>Bad</button>
    </>
)

FeedbackOptions.propTypes = {
    onLeaveFeedbackGood: PropTypes.func.isRequired,
    onLeaveFeedbackNeutral: PropTypes.func.isRequired,
    onLeaveFeedbackBad: PropTypes.func.isRequired,
}

export default FeedbackOptions;