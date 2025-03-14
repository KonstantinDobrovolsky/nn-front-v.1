import { IFighter } from 'app/types/Types';
import classes from './RedCounter.module.css';
import RedSigns from './RedSigns';

const RedCounter = ({fighter} : IFighter) => {
    return (
        <div className={`${classes.redCounter} flex`}>
            <div className={classes.redScore}>
                {fighter.score}
            </div>
            <RedSigns fighter={fighter}/>
        </div>
    );
}

export default RedCounter;