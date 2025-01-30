import classes from './RatingListItem.module.css'
import RatingPosition from './Items/RatingPosition';
import Name from './Items/Name';
import RatingValue from './Items/RatingValue';
import RatingDynamics from './Items/RatingDynamics';
import Club from './Items/Club';
import { RatingListItemProps } from '../../app/types/Types'


const RatingListItem = ({props} : {props: RatingListItemProps}) => {

    return (
        <div className={`${classes.ratingListItem} ${props.isRatingValid ? "" : classes.notValidatedRating}`}>
            <RatingPosition position={props.position} />
            <Name FIO={props.fio}/>
            <RatingValue value={props.ratingValue}/>
            <RatingDynamics dynamics={props.ratingDynamics}/>
            <Club club={props.club} />
        </div>
    );
}

export default RatingListItem;