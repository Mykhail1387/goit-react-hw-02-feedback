import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {!!total && <>
                <p className={styles.text}>Good: {good}</p>
                <p className={styles.text}>Neutral: {neutral}</p>
                <p className={styles.text}>Bad: {bad}</p>
                <p className={styles.text}>Total: {total}</p>
                <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
            </>}
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;