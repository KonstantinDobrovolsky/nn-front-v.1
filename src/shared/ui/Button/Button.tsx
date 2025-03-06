import classes from './Button.module.css';

interface ButtonProps {
    name: string,
    inheritClasses: string,
    onClick: Function
}

const Button = ({name, inheritClasses, onClick} : ButtonProps) => {
    return (
        <button className={`${classes.btn} flex ${inheritClasses}`} onClick={() => onClick()}>
            {name}
        </button>
    );
}

export default Button;