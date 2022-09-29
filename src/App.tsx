import PlaygroundForm from "./components/PlaygroundForm";

import ENDPOINTS_DATA from "./json/endpoints.json"

function App() {
 // const ENDPOINTS_DATA : Endpoint = 

 return (
    <>
    <PlaygroundForm endpoints={ENDPOINTS_DATA} />
  </>
  );
}

export default App;
 