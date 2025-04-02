import classes from './CurrentFightsPage.module.css'
import Fight from './Fight';
import { IFightersPair } from "app/types/Types";

export const CurrentFightsPage = () => {
    const fights: IFightersPair[] = [
        { firstFighter: {name: "Иванов Иван", score: 12}, secondFighter: {name: "Петров Петр", score: 2} },
        { firstFighter: {name: "Иванов Иван", score: 1}, secondFighter: {name: "Петров Петр", score: 6} },
        { firstFighter: {name: "Иванов Иван", score: 3}, secondFighter: {name: "Петров Петр", score: 3} },
        { firstFighter: {name: "Иванов Иван", score: 10}, secondFighter: {name: "Петров Петр", score: 8} }
    ]
    return (
        <div>
            <div className={`${classes.fights} flex`}>
                {fights.map((pair) => <Fight firstFighter={pair.firstFighter} secondFighter={pair.secondFighter}/>)}
            </div>
            <div className={`${classes.placeholder}`}/>
        </div>
    );
}