import { useQuery } from "@tanstack/react-query"
import Axios from "axios"
export const useFetchData = (url) => {
    const { data, refetch } = useQuery(["cat"], () => Axios.get(url).then(res => res.data))
    const refetchData = () => {
        refetch();
    }

    return [data, refetchData]
}