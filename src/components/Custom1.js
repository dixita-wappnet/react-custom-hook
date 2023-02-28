import { useState } from 'react'

function useCustom() {
    const [time, setTime] = useState(0)
    const handleTimeWatch = () => {
        setTime(time + 1);
    };
    return (
        <>
        <h1>Time: {time}</h1>
        <button type='button' onClick={handleTimeWatch}>Set Time</button>
        </>
    );
}
export default useCustom;
