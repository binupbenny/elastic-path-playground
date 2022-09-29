import Navbar from "./components/Navbar";
import PlaygroundForm from "./components/PlaygroundForm";

import ENDPOINTS_DATA from "./json/endpoints.json"

function App() {

 return (
    <>
    <Navbar/>
    <PlaygroundForm endpoints={ENDPOINTS_DATA} />
  </>
  );
}

export default App;
 