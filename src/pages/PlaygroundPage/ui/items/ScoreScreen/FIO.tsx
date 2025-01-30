import classes from './FIO.module.css';

const FIO = ({fio} : {fio: string}) => {
    fio = fio.toUpperCase();
    return (
        <div className={classes.fio}>
            {fio}
        </div>
    );
}

export default FIO;