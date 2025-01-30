import classes from './Hotkeys.module.css';
import HotkeysElement from './HotkeysElement';

const Hotkeys = () => {
    return (
        <div className={`${classes.hotkeys} flex`}>
            <HotkeysElement text="Q - балл синему W - минус балл синему"/>
            <HotkeysElement text="A - балл красному S - минус балл красному"/>
            <HotkeysElement text="+ добавить 10 секунд - убрать 10 секунд"/>
            <HotkeysElement text="Пробел - запустить/остановить таймер"/>
        </div>
    );
}

export default Hotkeys;