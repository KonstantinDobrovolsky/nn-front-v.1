import TournamentItem from "./TournamentItem";

const TournamentList = ({items}: {items: string[]}) => {

    return (
        <div>
            {items.map(item => <TournamentItem name={`${item}`}/>)}
        </div>
    );
}

export default TournamentList;