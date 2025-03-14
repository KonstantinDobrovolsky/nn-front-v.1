import ScoreScreen from "./items/ScoreScreen/ScoreScreen";
import ControlPanel from "./items/ControlPanel/ControlPanel";
import EngagementManagement from "./items/ControlPanel/EngagementManagement/EngagementManagement";
import { useEffect, useState } from "react";

export const PlaygroundPage = () => {
    const [firstScore, setFirstScore] = useState<number>(11);
    const [secondScore, setSecondScore] = useState<number>(12);
    const [firstName, setFirstName] = useState<string>('Добровольский Константин')
    const [secondName, setSecondName] = useState<string>('Матлашевский Владимир')

    useEffect( () => {
        document.addEventListener('keydown', changeScore);

        return () => {
            document.removeEventListener('keydown', changeScore);
        }

    }, [firstScore, secondScore])

    const changeScore = (e: any) => {
        const keyCode = e.code;
        switch (keyCode) {
            case 'KeyW':
                setFirstScore(firstScore + 1);
                break;
            case 'KeyQ':
                setFirstScore(firstScore - 1);
                break;
            case 'KeyP':
                setSecondScore(secondScore + 1);
                break;
            case 'KeyO':
                setSecondScore(secondScore - 1);
                break
        }
    }

    const firstFighter = {name: firstName, score: firstScore, setScore: setFirstScore}
    const secondFighter = {name: secondName, score: secondScore, setScore: setSecondScore}

    return (
        <div style={{backgroundColor: "rgb(var(--base))"}}>
            <ScoreScreen firstFighter={firstFighter} secondFighter={secondFighter}/>
            <ControlPanel firstFighter={firstFighter} secondFighter={secondFighter}/>
            <EngagementManagement firstFighter={firstFighter} secondFighter={secondFighter}/>
        </div>
    );
}