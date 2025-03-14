import Button from "shared/ui/Button/Button";
import classes from './RedSigns.module.css';
import { IFighter } from "app/types/Types";

const RedSigns = ({fighter} : IFighter) => {
    return (
        <div className={`${classes.signs} flex`}>
            <Button name='+' inheritClasses={classes.redSign} onClick={() => (fighter.setScore((score: number)=> score + 1))}/>
            <Button name='-' inheritClasses={classes.redSign} onClick={() => (fighter.setScore((score: number)=> score - 1))}/>
        </div>
    );
}

export default RedSigns;