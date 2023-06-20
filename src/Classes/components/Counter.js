import { useCounter } from "../hooks/useCounter"
export const Counter = () => {
    const { count, addCount, subtractCount, resetCount } = useCounter()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={resetCount}>Reset</button>

        </div>
    )
}