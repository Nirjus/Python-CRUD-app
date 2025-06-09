import Navbar from "./components/Navbar/Navbar";
import CardFetchComponent from "./components/CardFetchComponent/CardFetchComponent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <CardFetchComponent />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
}

export default App;
