import { useState } from 'react';
import Popup from './Popup';

const FunctionBox = () => {
    let colors = "#dd88e6";
    const [color, setColor] = useState(colors);
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [animated, setaAimated] = useState(false);
    const [running, setRunning] = useState (false);

    const moveBox = (e) => {
        colors = "#" + Math.random().toString(16).substr(-6);
        setaAimated (true);
        setCount(count + 1);
        setColor(colors);
        setRunning(!running);

    }
    const removAnimation = (e) => {
        e.target.classList.remove("animated");
        setIsOpen(true);
    }

    const onClose = () =>{
         setIsOpen(false);
         setRunning(!running);
         setaAimated (false)
    }

    const stopProp = (e) => e.stopPropagation();

    return (
        <>
            <h2 id="funcText">Function Component</h2>
            { !isOpen ? null : <Popup
                text={count}
                onClose={onClose}
            />}
            <div className= {` funcBox 
                           ${animated && "animated"}
                            ${running ?  "running" : "paused"}
                        `}
                onClick={isOpen ? null : moveBox}
                onAnimationEnd={removAnimation}
                style={{ backgroundColor: color }}>
                <p onClick={stopProp}>
                    {count}
                </p>
            </div>
        </>
    )
}

export default FunctionBox