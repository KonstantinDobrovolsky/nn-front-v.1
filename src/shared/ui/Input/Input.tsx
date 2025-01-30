import classes from './Input.module.css';

const Input = ({value} : {value: string}) => {
    return (
        <input defaultValue={value} className={classes.input}/>
    );
}

export default Input;