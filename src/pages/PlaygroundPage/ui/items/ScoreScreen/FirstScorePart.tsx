import FIO from './FIO';
import classes from './FirstScorePart.module.css';

const FirstScorePart = ({score, name} : {score: number, name: string}) => {
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