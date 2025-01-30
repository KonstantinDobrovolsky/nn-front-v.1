import classes from './Button.module.css';

const Button = ({name, inheritClasses, onClick} : {name: string, inheritClasses: string, onClick: Function}) => {
    return (
        <button className={`${classes.btn} flex ${inheritClasses}`} onClick={() => onClick()}>
            {name}
        </button>
    );
}

export default Button;