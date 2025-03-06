import Button from 'shared/ui/Button/Button';
import classes from './Modal.module.css';

interface Props {
    message: string,
    visible: boolean,
    setVisible: Function,
    confirm: Function,
    decline: Function
}

const Modal = ({message, visible, setVisible, confirm, decline}: Props) => {
    const rootClasses = [classes.modal];
    if (visible){
        rootClasses.push(classes.active);
    }

    const sendData = () => {
        console.log("Data send")
        setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {message}
                <div className={`${classes.form} flex`}>
                    <Button name={"Отмена"} inheritClasses='' onClick={() => (setVisible(false))}/>
                    <Button name={"Отправить"} inheritClasses='' onClick={sendData}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;