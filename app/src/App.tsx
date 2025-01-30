import HomePage from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <div className="w-screen bg-gray-50">
        <Header />
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
