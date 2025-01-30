import classes from './RedInput.module.css';

const RedInput = ({name}: {name: string}) => {
    name = name.split(' ')[0] + ' ' + name.split(' ')[1][0] + '.'
    return (
        <div>
            <input className={classes.redInput} defaultValue={name}/>
        </div>
    );
}

export default RedInput;