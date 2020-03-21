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

    onLeaveFeedback = (e) => {
        const { name } = e.target
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1,
            }
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
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
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const objKey = Object.keys(this.state)

        return (
            <>
                <Section title={"Please leave feedback"} >
                    {<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />}
                </Section>

                <Section title={"Statistics"} >
                    {!total && <Notification message={"No feedback given"} />}
                    {<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
                </Section>
            </>
        )
    }
}
