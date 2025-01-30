import classes from './RatingListHeader.module.css'
import RatingPosition from './Items/RatingPosition';
import Name from './Items/Name';
import RatingValue from './Items/RatingValue';
import RatingDynamics from './Items/RatingDynamics';
import Club from './Items/Club';

const RatingListHeader = ({dynamics}: {dynamics: string}) => {
    return (
        <div className={classes.ratingListHeader}>
            <RatingPosition position='Позиция в рейтинге' />
            <Name FIO="ФИО"/>
            <RatingValue value='Значение рейтинга'/>
            <RatingDynamics dynamics={dynamics}/>
            <Club club='Клуб' />
        </div>
    );
}

export default RatingListHeader;