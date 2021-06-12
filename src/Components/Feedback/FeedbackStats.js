import style from "./Feedback.module.css"
import PropTypes from "prop-types"

const FeedbackStats = ({ stats: { good, neutral, bad }, total, positive }) => (
    <div className={style.feedback_stats}>
        <h1 className={style.stats_header}>Statistics</h1>
        <p className={style.stats_label}>Good: {good}</p>
        <p className={style.stats_label}>Neutral: {neutral}</p>
        <p className={style.stats_label}>Bad: {bad}</p>
        <p className={style.stats_label}>Total: {total}</p>
        <p className={style.stats_label}>Positive feedback: {positive} </p>
    </div>
)

export default FeedbackStats

FeedbackStats.propTypes = {
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
}
