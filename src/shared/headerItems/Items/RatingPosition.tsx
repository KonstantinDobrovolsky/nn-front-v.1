import classes from './RatingPosition.module.css'

const RatingPosition = ({position}: {position: string}) => {
    return (
        <div className={classes.ratingPosition}>
            {position}
        </div>
    );
}

export default RatingPosition;