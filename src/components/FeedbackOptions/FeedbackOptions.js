import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        {options.map(option => (
            <button key={shortid.generate()} name={option} className={styles.btn} type="button" onClick={onLeaveFeedback}>{option}</button>
        ))}

    </>
)


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default FeedbackOptions;
