import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import style from "./Feedback.module.css"

const FeedbackOptions = ({ onChangeStats }) => {
    return (
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button className={style.button_label} name="good" onClick={(e) => onChangeStats(e.currentTarget.name)}>
                Good
            </Button>
            <Button className={style.button_label} name="neutral" onClick={(e) => onChangeStats(e.currentTarget.name)}>
                Neutral
            </Button>
            <Button className={style.button_label} name="bad" onClick={(e) => onChangeStats(e.currentTarget.name)}>
                Bad
            </Button>
        </ButtonGroup>
    )
}

export default FeedbackOptions
