import { IFightersPair } from "app/types/Types";
import classes from "./Fight.module.css"

const Fight = ({firstFighter, secondFighter}: IFightersPair) => {
    return (
        <div className={`${classes.fight}`}>
            <div className="flex">
                <div className={`${classes.element}`}>{firstFighter.name}</div>
                <div className={`${classes.element}`}>{secondFighter.name}</div>
            </div>
            <div className="flex">
                <div className={`${classes.element}`}>{firstFighter.score}</div>
                <div className={`${classes.element}`}>{secondFighter.score}</div>
            </div>
        </div>
    );
}

export default Fight;