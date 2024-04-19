import { BrowserRouter, Route, Routes } from "react-router-dom";
;
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Chatbot/>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;