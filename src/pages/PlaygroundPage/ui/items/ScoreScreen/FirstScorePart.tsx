import FIO from './FIO';
import classes from './FirstScorePart.module.css';

interface Props {
    score : number,
    name: string
}

const FirstScorePart = ({score, name} : Props) => {
    return (
        <div className={classes.firstScorePart}>
            <FIO fio={name} />
            <div className={classes.score}>
                {score}
            </div>
        </div>
    );
}

export default FirstScorePart;