import classes from './RatingDynamics.module.css'

const RatingDynamics = ({dynamics} : {dynamics: string}) => {

    const itemColor = isNaN(+dynamics) || dynamics === null
        ? ""
        : parseInt(dynamics) >= 0 ? classes.positiveDynamics : classes.negativeDynamics;

    const finalLine = (+dynamics) > 0 ? "+" + dynamics : dynamics;
    return (

        <div className={`${classes.ratingDynamics} ${itemColor}`}>
            {finalLine}
        </div>
    );
}

export default RatingDynamics;