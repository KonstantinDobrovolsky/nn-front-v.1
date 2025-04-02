import { useState } from 'react';
import classes from './Clues.module.css';

const Clues = ({infoText} : any) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div>
            <div className={`${classes.clues} flex`}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                ?
            </div>
            <div style={{ whiteSpace: 'pre-line' }} className={`${classes.tooltip} ${showTooltip ? classes.open : ""}`}>
                {infoText}
            </div>
        </div>

    );
}

export default Clues;