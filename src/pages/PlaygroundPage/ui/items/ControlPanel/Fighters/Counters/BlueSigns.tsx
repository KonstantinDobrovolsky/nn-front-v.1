import Button from "shared/ui/Button/Button";
import classes from './BlueSigns.module.css';

const BlueSigns = ({blueScore, setBlueScore} : {blueScore: number, setBlueScore: Function}) => {
    return (
        <div className={`${classes.signs} flex`}>
            <Button name='+' inheritClasses={classes.blueSign} onClick={() => (setBlueScore(blueScore + 1))}/>
            <Button name='-' inheritClasses={classes.blueSign} onClick={() => (setBlueScore(blueScore - 1))}/>
        </div>
    );
}

export default BlueSigns;