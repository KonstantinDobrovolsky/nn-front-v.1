import classes from './HotkeysElement.module.css';

const HotkeysElement = ({text} : {text: string}) => {
    return (
        <div className={`${classes.hotkeyElement} flex`}>
            {text}
        </div>
    );
}

export default HotkeysElement;