import { useNavigate } from "react-router-dom";
import classes from "./Name.module.css"

const Name = ({FIO} : {FIO: string}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/fighters/2`)} className={classes.name}>
            {FIO}
        </div>
    );
}

export default Name;