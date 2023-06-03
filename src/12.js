import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Cat } from "./components/Cat";
// Fetching data with custom hooks
function App() {
    const client = new QueryClient()
    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <Cat />
            </QueryClientProvider>
        </div>
    );
}

export default App;
