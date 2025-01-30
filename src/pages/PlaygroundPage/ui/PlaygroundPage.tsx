import ScoreScreen from "./items/ScoreScreen/ScoreScreen";
import ControlPanel from "./items/ControlPanel/ControlPanel";
import classes from './PlaygroundPage.module.css';
import EngagementManagement from "./items/ControlPanel/EngagementManagement/EngagementManagement";
import { useEffect, useState } from "react";

export const PlaygroundPage = () => {
    const [blueScore, setBlueScore] = useState<number>(11);
    const [redScore, setRedScore] = useState<number>(12);
    const [blueName, setBlueName] = useState<string>('Добровольский Константин')
    const [redName, setRedName] = useState<string>('Матлашевский Владимир')

    useEffect( () => {
        document.addEventListener('keydown', changeScore);

        return () => {
            document.removeEventListener('keydown', changeScore);
        }

    }, [blueScore, redScore])

    const changeScore = (e: any) => {
        const keyCode = e.code;
        switch (keyCode) {
            case 'KeyW':
                setBlueScore(blueScore + 1);
                break;
            case 'KeyQ':
                setBlueScore(blueScore - 1);
                break;
            case 'KeyP':
                setRedScore(redScore + 1);
                break;
            case 'KeyO':
                setRedScore(redScore - 1);
                break
        }
    }

    return (
        <div className={classes.playgroundPage}>
            <ScoreScreen blueScore={blueScore} redScore={redScore} blueName={blueName} redName={redName}/>
            <ControlPanel blueScore={blueScore} redScore={redScore} setBlueScore={setBlueScore} setRedScore={setRedScore} blueName={blueName} redName={redName}/>
            <EngagementManagement blueScore={blueScore} redScore={redScore} blueName={blueName} redName={redName}/>
        </div>
    );
}