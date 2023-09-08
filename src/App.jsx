import { useState, useEffect } from "react";
import "./App.css";
import CreateHobby from "./createHobby";
import Hobby from "./hobbyItem";
function App() {
  const [hobbyData, setHobbyData] = useState([]);

  useEffect(() => {
    console.log(hobbyData);
  }, [hobbyData]);

  const handleItemCallback = (data) => {
    if (!hobbyData) return;
    setHobbyData([...hobbyData, data]);
  };

  return (
    <main>
      {/* Creating the Item */}
      <CreateHobby handleCallback={handleItemCallback} />
      {/* Displaying the Items  */}
      <ul>
        {/* Items Here */}
        {/* Use map here for  */}
        <Hobby data={hobbyData} />
      </ul>
    </main>
  );
}

export default App;
