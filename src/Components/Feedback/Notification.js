import style from "./Feedback.module.css"

const Notification = ({ message }) => <h3 className={style.notification}>{message}</h3>

export default Notification
