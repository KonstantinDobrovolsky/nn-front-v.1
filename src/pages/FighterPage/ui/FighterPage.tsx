import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from './FighterPage.module.css';
import { FighterDto } from "app/types/Types";
import FightsList from "shared/FightsList";

export const FighterPage = () => {
    const params = useParams();
    const [fighterDto, setFighterDto] = useState<FighterDto>();

    useEffect(() => {
        axios.get(`https://localhost:7204/api/Rating/fighterById/${params.id}`)
            .then(response => {
                setFighterDto(response.data[0])
            })
            .catch()
    }, [])

    return (
        <div>
            <div className={classes.fio}>{fighterDto?.fio} &lt;{fighterDto?.club}&gt;</div>
            <hr className={classes.dividingLine}/>
            <div className={classes.weaponRanking}>Saber: position: {fighterDto?.saberPosition} rating: {fighterDto?.saberRating}</div>
            <FightsList fights={fighterDto?.fights} />
        </div>
    );
}