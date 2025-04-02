import classes from './TournamentItem.module.css'

interface item {
    name: string
}

const TournamentItem = ({name}: item) => {
    return (
        <div className={`${classes.item}`}>
            {name}
        </div>
    );
}

export default TournamentItem;