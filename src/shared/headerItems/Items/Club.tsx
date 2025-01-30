import classes from './Club.module.css'

const Club = ({club}: {club: string}) => {
    return (
        <div className={classes.club}>
            {club}
        </div>
    );
}

export default Club;