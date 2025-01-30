import { useEffect, useState } from "react";
import { RatingListItemProps } from "../../../app/types/Types";
import RatingList from "../../../shared/RatingList";
import axios from "axios";

export const SaberRatingPage = () => {
    const [ratingListProps, setRatingListProps] = useState<RatingListItemProps[]>([])

    useEffect(() => {
        axios.get(`https://localhost:7204/api/Rating/saberRating`)
            .then(response => {setRatingListProps(response.data)})
            .catch(() => setRatingListProps([]))
    }, [])

    return (
        <div>
            <RatingList props={ratingListProps} dynamics='Последний турнир'/>
        </div>
    );
}