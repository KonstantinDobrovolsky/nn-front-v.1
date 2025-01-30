import FIO from './FIO';
import classes from './SecondScorePart.module.css';

const SecordScorePart = ({score, name} : {score: number, name: string}) => {
    return (
        <div className={classes.secondScorePart}>
            <FIO fio={name}/>
            <div className={classes.score}>
                {score}
            </div>
        </div>
    );
}

export default SecordScorePart;