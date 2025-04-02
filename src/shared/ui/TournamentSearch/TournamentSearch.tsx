import { useState } from "react";
import classes from "./TournamentSearch.module.css"
import TournamentList from "./TournamentList";

const TournamentSearch = () => {
    const [searchName, setSearchName] = useState('')
    const [tournaments, setTournaments] = useState<string[]>(["one", "two", "three", "four", "five"])
    const [items, setItems] = useState<string[]>(tournaments)


    function filter(e: any){
        const value = e.target.value
        setSearchName(value)
        setItems(tournaments.filter(item => item.includes(value)))

        if (value === '')
            setItems(tournaments)
    }

    return (
        <div>
            <div className={`${classes.tournamentSearch}`}>
                <input className={`${classes.searchInput}`} onChange={(e) => {filter(e)}} type="text" placeholder="Название турнира"/>
            </div>
            <TournamentList items={items}/>
            <div className={`${classes.placeholder}`}/>
        </div>

    );
}

export default TournamentSearch;