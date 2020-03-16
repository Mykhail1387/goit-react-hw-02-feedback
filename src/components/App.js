import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


export default class AppHW extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalGood = (e) => {
        this.setState(prevState => {

            return {
                good: prevState.good + 1,
            }
        })
    }

    countTotalNeutral = (e) => {
        this.setState(prevState => {

            return {
                neutral: prevState.neutral + 1
            }
        })
    }

    countTotalBad = (e) => {
        this.setState(prevState => {

            return {
                bad: prevState.bad + 1
            }
        })
    }

    countTotalFeedback = () => {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const result = bad + neutral + good;

        return result;
    }

    countPositiveFeedbackPercentage = () => {
        let result = this.countTotalFeedback();
        const { good } = this.state;
        const total = 100;
        const percent = good * total / result;

        return parseInt(percent);
    }

    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title={"Please leave feedback"} />

                <FeedbackOptions onLeaveFeedbackGood={this.countTotalGood} onLeaveFeedbackNeutral={this.countTotalNeutral} onLeaveFeedbackBad={this.countTotalBad} />

                <h2 style={{ fontSize: '32px' }}>Statistics</h2>

                {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message={"No feedback given"} />}
            </>
        )
    }
}
