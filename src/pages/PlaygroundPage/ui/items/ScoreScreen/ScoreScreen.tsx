import FirstScorePart from './FirstScorePart';
import SecondScorePart from './SecordScorePart';
import classes from './ScoreScreen.module.css';
import Clues from './Clues';
import { Timer } from 'entities/Timer';
import { IFightersPair } from 'app/types/Types';

const ScoreScreen = ({firstFighter, secondFighter} : IFightersPair) => {
    return (
        <div>
            <div className={`${classes.scoreScreen} flex`}>
                <FirstScorePart fighter={firstFighter}/>
                <SecondScorePart fighter={secondFighter}/>
                <Timer/>
                <Clues infoText="W - плюс балл левому, Q - минус балл левому
                P - плюс балл правому, O - минус балл правому
                пробел - запустить/остановить таймер
               '+' добавить 1 секунду, '-' вычесть 1 секунду"/>
            </div>
        </div>
    );
}

export default ScoreScreen;