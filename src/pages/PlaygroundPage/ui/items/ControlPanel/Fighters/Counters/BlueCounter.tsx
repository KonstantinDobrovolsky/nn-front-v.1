import classes from './BlueCounter.module.css';
import BlueSigns from './BlueSigns';
import { IFighter } from 'app/types/Types';

const BlueCounter = ({fighter} : IFighter) => {
    return (
        <div className={`${classes.blueCounter} flex`}>
            <BlueSigns fighter={fighter}/>
            <div className={classes.blueScore}>
                {fighter.score}
            </div>
        </div>
    );
}

export default BlueCounter;