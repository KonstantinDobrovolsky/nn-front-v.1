import classes from './RedCounter.module.css';
import RedSigns from './RedSigns';

interface Props {
    redScore: number,
    setRedScore: Function
}

const RedCounter = ({redScore, setRedScore} : Props) => {
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