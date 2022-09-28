import Navbar from "./components/Navbar";
import PlaygroundForm from "./components/PlaygroundForm";

import ENDPOINTS from './json/endpoints.json';


function App() {
  return (
    <>

      <Navbar />
      <PlaygroundForm endpoints={ENDPOINTS} />

    </>
  );
}

export default App;
