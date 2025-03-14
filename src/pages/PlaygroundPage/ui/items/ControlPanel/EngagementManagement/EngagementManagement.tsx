import Button from 'shared/ui/Button/Button';
import classes from './EngagementManagement.module.css'
import { useState } from 'react';
import Modal from './Modal';
import { IFightersPair } from 'app/types/Types';

const EngagementManagement = ({firstFighter, secondFighter} : IFightersPair) => {
    const [finishModal, setFinishModal] = useState<boolean>(false)

    const finish = () => {
        if (firstFighter.score > 0 || secondFighter.score > 0 || firstFighter.name != "" || secondFighter.name != "")
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