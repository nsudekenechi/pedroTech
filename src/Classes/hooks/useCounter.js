import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1)
    }
    const subtractCount = () => {
        setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return { count, addCount, subtractCount, resetCount }
}