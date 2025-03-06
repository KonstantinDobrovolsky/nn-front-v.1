import classes from './Fighters.module.css';
import BlueCounter from './Counters/BlueCounter';
import RedCounter from './Counters/RedCounter';
import BlueInput from './BlueInput';
import RedInput from './RedInput';

interface Props {
    blueScore: number,
    redScore: number,
    setBlueScore: Function,
    setRedScore: Function,
    blueName: string,
    redName: string
}

const Fighters = ({blueScore, redScore, setBlueScore, setRedScore, blueName, redName} : Props) => {
    return (
        <div className={`${classes.fighters} flex`}>
            <div className={`${classes.left} flex`}>
                <BlueCounter blueScore={blueScore} setBlueScore={setBlueScore}/>
                <BlueInput name={blueName}/>
            </div>
            <div className={`${classes.right} flex`}>
                <RedInput name={redName}/>
                <RedCounter redScore={redScore} setRedScore={setRedScore}/>
            </div>
        </div>
    );
}

export default Fighters;