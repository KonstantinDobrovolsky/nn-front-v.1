import Button from "shared/ui/Button/Button";
import classes from './BlueSigns.module.css';

interface Props {
    blueScore: number,
    setBlueScore: Function
}

const BlueSigns = ({blueScore, setBlueScore} : Props) => {
    return (
        <div className={`${classes.signs} flex`}>
            <Button name='+' inheritClasses={classes.blueSign} onClick={() => (setBlueScore(blueScore + 1))}/>
            <Button name='-' inheritClasses={classes.blueSign} onClick={() => (setBlueScore(blueScore - 1))}/>
        </div>
    );
}

export default BlueSigns;