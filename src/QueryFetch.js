import { useQuery } from "@tanstack/react-query"
import Axios from "axios"
const QueryFetch = () => {
    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => Axios.get("https://catfact.ninja/fact").then(res => res.data?.fact))
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error!!</h1>
    }
    return (
        <div>
            QueryFetch <h1>{data}</h1>
            <button onClick={refetch}>Update</button>
        </div>
    )
}

export default QueryFetch