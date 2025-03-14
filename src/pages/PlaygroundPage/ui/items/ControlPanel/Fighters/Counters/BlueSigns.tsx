import Button from "shared/ui/Button/Button";
import classes from './BlueSigns.module.css';
import { IFighter } from "app/types/Types";

const BlueSigns = ({fighter} : IFighter) => {
    return (
        <div className={`${classes.signs} flex`}>
            <Button name='+' inheritClasses={classes.blueSign} onClick={() => (fighter.setScore((score: number)=> score + 1))}/>
            <Button name='-' inheritClasses={classes.blueSign} onClick={() => (fighter.setScore((score: number)=> score - 1))}/>
        </div>
    );
}

export default BlueSigns;