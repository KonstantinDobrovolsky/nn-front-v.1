import { useState } from "react";
import { RatingListItemProps } from "../../../app/types/Types";
import RatingList from "../../../shared/RatingList";

export const LongswordRatingPage = () => {
    const [ratingListProps, setRatingListProps] = useState<RatingListItemProps[]>(
        [{
            position: "1",
            fio: "Васильев Пётр",
            ratingValue: '1398',
            ratingDynamics: '54',
            club: "Золотой Сокол",
            isRatingValid: true
        }]
    )

    return (
        <div>
            <RatingList props={ratingListProps} dynamics='Последний турнир'/>
        </div>
    );
}