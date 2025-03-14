import classes from './Fighters.module.css';
import BlueCounter from './Counters/BlueCounter';
import RedCounter from './Counters/RedCounter';
import BlueInput from './BlueInput';
import RedInput from './RedInput';
import { IFightersPair } from 'app/types/Types';

const Fighters = ({firstFighter, secondFighter} : IFightersPair) => {
    return (
        <div className={`${classes.fighters} flex`}>
            <div className={`${classes.left} flex`}>
                <BlueCounter fighter={firstFighter}/>
                <BlueInput name={firstFighter.name}/>
            </div>
            <div className={`${classes.right} flex`}>
                <RedInput name={secondFighter.name}/>
                <RedCounter fighter={secondFighter}/>
            </div>
        </div>
    );
}

export default Fighters;