import { useEffect, useState } from 'react';
import classes from './Timer.module.css';

export const Timer = () => {
    const [zero, setZero] = useState(1);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(2);
    const [fourth, setFourth] = useState(0);
    const [timerIsOn, setTimerIsOn] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        if (timerIsOn && (first > 0 || second > 0 || third > 0 || fourth > 0)){
            setTimeout(() => (decreaseZero()), 250)
        } else {
            setTimerIsOn(false);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }

    }, [zero, first, second, third, fourth, timerIsOn])

    const handleKeyDown = (e: any) => {
        const code = e.code;
        if (code === 'Space'){
            e.preventDefault();
            if (timerIsOn) setTimerIsOn(false)
            else setTimerIsOn(true);
        }
        if (code === 'Equal'){
            increaseFirst();
        }
        if (code === "Minus"){
            decreaseFirst()
        }
    }

    function increaseFirst(){
        if(first < 9) setFirst(first + 1)
        else
            {
                setFirst(0)
                increaseSecond()
            }
    }

    function increaseSecond(){
        if (second < 5) setSecond(second + 1)
        else 
            {
                setSecond(0)
                increaseThird()
            }
    }

    function increaseThird(){
        if (third < 9) setThird(third + 1)
        else
            {
                setThird(0)
                if (fourth < 9) setFourth(fourth + 1)
            }
    }

    function decreaseZero(){
        console.log(zero)
        if (zero >= 0.5) setZero(zero - 0.25)
        else
            {
                setZero(1)
                decreaseFirst()
            }
    }

    function decreaseFirst(){
        if (first > 0) setFirst(first - 1)
        else if (second > 0 || third > 0 || fourth > 0)
            {
                decreaseSecond();
                setFirst(9);
            }
    }

    function decreaseSecond(){
        if (second > 0) setSecond(second - 1)
        else if (third > 0 || fourth > 0)
        {
            decreaseThird();
            setSecond(5);
        }
    }

    function decreaseThird(){
        if (third > 0) setThird(third - 1)
        else if (fourth > 0)
        {
            setFourth(fourth - 1);
            setThird(9);
        }
    }

    return (
        <div className={`${classes.timer} flex`}>
            {fourth}{third}:{second}{first}
        </div>
    );
}