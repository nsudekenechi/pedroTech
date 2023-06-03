import { useFetchData } from "../hooks/useFetchData"
export const Cat = () => {
    const [data] = useFetchData("https://catfact.ninja/fact")
    return (
        <div>
            <h1>{data?.fact}</h1>
        </div>
    )
}