import RatingListHeader from "./headerItems/RatingListHeader";
import RatingListItem from "./headerItems/RatingListItem";
import { RatingListItemProps } from "../app/types/Types";

const RatingList = ({props, dynamics} : {props: RatingListItemProps[], dynamics: string}) => {

    return (
        <div>
            <RatingListHeader dynamics={dynamics}/>
            {props.map(prop => <RatingListItem props={prop} key={prop.position}/>)}
        </div>
    );
}

export default RatingList;