import { useSelector } from "react-redux";
export const Home = () => {
  const username = useSelector((state: any) => state.myUser.value);
  return <h1>This is the home page {username}</h1>;
};
