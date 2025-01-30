import classes from './RedCounter.module.css';
import RedSigns from './RedSigns';

const RedCounter = ({redScore, setRedScore} : {redScore: number, setRedScore: Function}) => {
    return (
        <div className={`${classes.redCounter} flex`}>
            <div className={classes.redScore}>
                {redScore}
            </div>
            <RedSigns redScore={redScore} setRedScore={setRedScore}/>
        </div>
    );
}

export default RedCounter;