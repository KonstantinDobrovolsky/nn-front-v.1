import classes from './BlueCounter.module.css';
import BlueSigns from './BlueSigns';

const BlueCounter = ({blueScore, setBlueScore} : {blueScore: number, setBlueScore: Function}) => {

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