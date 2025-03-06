import classes from './ControlPanel.module.css';
import Fighters from './Fighters/Fighters';

interface Props {
    blueScore: number,
    redScore: number,
    setBlueScore: Function,
    setRedScore: Function,
    blueName: string,
    redName: string
}

const ControlPanel = ({blueScore, redScore, setBlueScore, setRedScore, blueName, redName} : Props) => {
    return (
        <div className={`${classes.controlPanel} flex`}>
            <Fighters blueScore={blueScore} redScore={redScore} setBlueScore={setBlueScore} setRedScore={setRedScore} blueName={blueName} redName={redName}/>
        </div>
    );
}

export default ControlPanel;