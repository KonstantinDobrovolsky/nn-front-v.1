import classes from './FIO.module.css';
import { IFighterData } from 'app/types/Types';

const FIO = ({name} : IFighterData) => {
    name = name.toUpperCase();
    return (
        <div className={classes.fio}>
            {name}
        </div>
    );
}

export default FIO;