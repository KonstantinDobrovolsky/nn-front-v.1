import FIO from './FIO';
import classes from './SecondScorePart.module.css';

interface Props {
    score : number,
    name: string
}

const SecordScorePart = ({score, name} : Props) => {
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