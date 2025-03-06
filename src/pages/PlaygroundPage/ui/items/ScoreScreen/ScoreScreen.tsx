import FirstScorePart from './FirstScorePart';
import SecondScorePart from './SecordScorePart';
import classes from './ScoreScreen.module.css';
import Clues from './Clues';
import { Timer } from 'entities/Timer';

interface Props {
    blueScore: number,
    redScore: number,
    blueName: string,
    redName: string
}

const ScoreScreen = ({blueScore, redScore, blueName, redName} : Props) => {
    return (
        <div>
            <div className={`${classes.scoreScreen} flex`}>
                <FirstScorePart score={blueScore} name={blueName}/>
                <SecondScorePart score={redScore} name={redName}/>
                <Timer/>
                <Clues/>
            </div>
        </div>
    );
}

export default ScoreScreen;