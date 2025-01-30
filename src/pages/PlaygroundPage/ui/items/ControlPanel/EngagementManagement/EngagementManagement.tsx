import Button from 'shared/ui/Button/Button';
import classes from './EngagementManagement.module.css'
import { useState } from 'react';
import Modal from './Modal';

const EngagementManagement = ({blueScore, redScore, blueName, redName} : {blueScore: number, redScore: number, blueName: string, redName: string}) => {
    const [finishModal, setFinishModal] = useState<boolean>(false)

    const finish = () => {
        if (blueScore > 0 || redScore > 0 || blueName != "" || redName != "")
            setFinishModal(true)
    }
    return (
        <div>
            <div className={`${classes.engagementManagement} flex`}>
                <Button inheritClasses={`${classes.getFight}`} name='Получить бой' onClick={() => console.log('Получить бой')}/>
                <Button inheritClasses={`${classes.finishFight}`} name='Завершить бой' onClick={finish}/>
            </div>

            <Modal
                message='Подтвердите отправку данных'
                visible={finishModal}
                setVisible={setFinishModal}
                confirm={() => (console.log("Confirm"))}
                decline={() => (console.log("Decline"))}
            />
        </div>

    );
}

export default EngagementManagement;