import FIO from './FIO';
import classes from './FirstScorePart.module.css';
import { IFighter } from 'app/types/Types';

const FirstScorePart = ({fighter} : IFighter) => {
    return (
        <div className={classes.firstScorePart}>
            <FIO name={fighter.name} />
            <div className={classes.score}>
                {fighter.score}
            </div>
        </div>
    );
}

export default FirstScorePart;