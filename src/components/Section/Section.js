import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title }) => (
    <>
        <h2 className={styles.title}>{title}</h2>
    </>
)

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
