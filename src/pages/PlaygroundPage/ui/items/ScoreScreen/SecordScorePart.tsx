import FIO from './FIO';
import classes from './SecondScorePart.module.css';
import { IFighter } from 'app/types/Types';

const SecordScorePart = ({fighter} : IFighter) => {
    return (
        <div className={classes.secondScorePart}>
            <FIO name={fighter.name}/>
            <div className={classes.score}>
                {fighter.score}
            </div>
        </div>
    );
}

export default SecordScorePart;