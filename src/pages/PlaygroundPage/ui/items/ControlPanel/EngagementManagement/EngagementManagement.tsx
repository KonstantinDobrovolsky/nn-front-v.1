import Button from 'shared/ui/Button/Button';
import classes from './EngagementManagement.module.css'
import { useState } from 'react';
import Modal from './Modal';
import { IFightersPair } from 'app/types/Types';

const EngagementManagement = ({firstFighter, secondFighter} : IFightersPair) => {
    const [finishModal, setFinishModal] = useState<boolean>(false)
    const [modalMessage, setModalMessage] = useState<string>('')
    const [modalFunc, setModalFunc] = useState<Function>(null)

    const fightIsOn = firstFighter.name != "" && secondFighter.name != ""

    function finishTheFight() {
        if (fightIsOn){
            setModalMessage("Подтвердите завершение боя")
            setModalFunc(() => () => {
                console.log("Data has send!!!!!!!!!!!!")
                setFinishModal(false)
            })
            setFinishModal(true)
        }
        else {
            setModalMessage("Данные о бойцах отсутствуют")
            setModalFunc(() => () => {
                console.log("Data was not send")
                setFinishModal(false)
            })
            setFinishModal(true)
        }
    }

    function getNewFight() {
        if (fightIsOn){
            setModalMessage("Данные о текущем бое будут потеряны. Вы уверены?")
            setModalFunc(() => () => {
                console.log("Data has send!!!!!!!!!!!!")
                setFinishModal(false)
            })
            setFinishModal(true)
        }

    }
    return (
        <div>
            <div className={`${classes.engagementManagement} flex`}>
                <Button inheritClasses={`${classes.getFight}`} name='Получить бой' onClick={getNewFight}/>
                <Button inheritClasses={`${classes.finishFight}`} name='Завершить бой' onClick={finishTheFight}/>
            </div>

            <Modal
                message={modalMessage}
                visible={finishModal}
                setVisible={setFinishModal}
                confirm={() => (modalFunc())}
                decline={() => setFinishModal(false)}
            />
        </div>

    );
}

export default EngagementManagement;