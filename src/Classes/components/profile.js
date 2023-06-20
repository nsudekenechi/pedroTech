import { useContext } from "react"
import { profileContext } from "./myContext"

export const Profile = () => {
    const { name } = useContext(profileContext)
    return (
        <h1>Hello {name}</h1>
    )
}