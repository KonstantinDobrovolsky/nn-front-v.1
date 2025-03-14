import classes from './ControlPanel.module.css';
import Fighters from './Fighters/Fighters';
import { IFightersPair } from 'app/types/Types';

const ControlPanel = ({firstFighter, secondFighter} : IFightersPair) => {
    return (
        <div className={`${classes.controlPanel} flex`}>
            <Fighters firstFighter={firstFighter} secondFighter={secondFighter}/>
        </div>
    );
}

export default ControlPanel;