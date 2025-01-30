import classes from './RatingValue.module.css'

const RatingValue = ({value} : {value: string}) => {
    return (
        <div className={classes.ratingValue}>
            {value}
        </div>
    );
}

export default RatingValue;