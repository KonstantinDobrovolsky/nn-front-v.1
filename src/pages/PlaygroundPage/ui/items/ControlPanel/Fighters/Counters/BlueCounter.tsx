import classes from './BlueCounter.module.css';
import BlueSigns from './BlueSigns';

interface Props {
    blueScore: number,
    setBlueScore: Function
}

const BlueCounter = ({blueScore, setBlueScore} : Props) => {

    return (
        <div className={`${classes.blueCounter} flex`}>
            <BlueSigns blueScore={blueScore}  setBlueScore={setBlueScore}/>
            <div className={classes.blueScore}>
                {blueScore}
            </div>
        </div>
    );
}

export default BlueCounter;