import Button from 'shared/ui/Button/Button';
import classes from './Modal.module.css';
import { IModal } from 'app/types/Types';

const Modal = ({message, visible, setVisible, confirm, decline}: IModal) => {
    const rootClasses = [classes.modal];
    if (visible){
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {message}
                <div className={`${classes.form} flex`}>
                    <Button name={"Отмена"} inheritClasses='' onClick={decline}/>
                    <Button name={"Подтвердить"} inheritClasses='' onClick={confirm}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;