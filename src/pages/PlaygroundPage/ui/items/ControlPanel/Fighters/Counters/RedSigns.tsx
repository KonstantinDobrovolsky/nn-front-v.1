import Button from "shared/ui/Button/Button";
import classes from './RedSigns.module.css';

interface Props {
    redScore: number,
    setRedScore: Function
}

const RedSigns = ({redScore, setRedScore} : Props) => {
    return (
        <div className={`${classes.signs} flex`}>
            <Button name='+' inheritClasses={classes.redSign} onClick={() => (setRedScore(redScore + 1))}/>
            <Button name='-' inheritClasses={classes.redSign} onClick={() => (setRedScore(redScore - 1))}/>
        </div>
    );
}

export default RedSigns;