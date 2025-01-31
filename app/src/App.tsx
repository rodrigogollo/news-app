import HomePage from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Live from "./components/Live/Live";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <div className="bg-gray-50">
        <Header />
        <Navbar />
        <Live />
        <HomePage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
