import classes from './FightsList.module.css'

const FightsList = ({fights} : {fights?: string[]}) => {
    return (
        <div>
            <div style={{marginTop: "40px", color: "rgb(29,236, 131)"}}>Fights:</div>
            {fights ? fights.map((fight, index) => <div className={classes.fight} key={index}>{fight}</div>) : ""}
        </div>
    );
}

export default FightsList;