import { useEffect, useState } from "react";

export const Text = () => {
    const [text, setText] = useState("")
    useEffect(() => {
        console.log("Component Mounted")
        // Running Function When Component Unmounts
        return () => {
            console.log("Component UnMounted")
        }
    }, [])
    return (<div className="App">
        <input onChange={(event) => setText(event.target.value)} />
        <h1>{text}</h1>
    </div>)
}