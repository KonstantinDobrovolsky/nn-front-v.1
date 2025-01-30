import classes from './BlueInput.module.css';

const BlueInput = ({name}: {name: string}) => {
    name = name.split(' ')[0] + ' ' + name.split(' ')[1][0] + '.'
    return (
        <div>
            <input className={classes.blueInput} defaultValue={name}/>
        </div>
    );
}

export default BlueInput;