//data
import React, { Component } from "react"
//components
import Section from "./Components/Feedback/Section"
import FeedbackOptions from "./Components/Feedback/FeedbackOptions"
import FeedbackStats from "./Components/Feedback/FeedbackStats"
import Notification from "./Components/Feedback/Notification"

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    handleChangeStats = (name) => {
        this.setState((prev) => ({
            [name]: prev[name] + 1,
        }))
    }
    getTotal = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    }
    getPositivePercentage = () => {
        const { good } = this.state
        return good ? Math.ceil((good / this.getTotal()) * 100) + "%" : "0%"
    }

    render() {
        const { good } = this.state
        return (
            <>
                <div style={{ width: "400px", margin: "0 auto" }}>
                    <h1>Please leave feedback</h1>
                    <Section>
                        <FeedbackOptions onChangeStats={this.handleChangeStats} />
                        {this.getTotal() ? (
                            <FeedbackStats
                                positive={this.getPositivePercentage()}
                                stats={this.state}
                                total={this.getTotal()}
                            />
                        ) : (
                            <Notification message="No feedback given" />
                        )}
                    </Section>
                </div>
            </>
        )
    }
}

export default App
