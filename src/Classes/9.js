import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import QueryFetch from "./QueryFetch";
// Using react-query to fetch data
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: false,
        refetchOnWindowFocus: false,
      }
    }
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <QueryFetch />
      </QueryClientProvider>
    </div>
  );
}

export default App;
