import { useState, useEffect, useId } from "react";
import Hobby from "./hobbyItem";
const CreateHobby = (props) => {
  /*
    JSON Architecture

    data : {
      hobbyName: 'Playing Guitar'
      hoursSpent:  
      id: 
    }
  */
  const [itemHobby, setItemHobby] = useState("");

  const handleInput = (e) => {
    setItemHobby(e.target.value);
  };

  const handleClick = () => {
    if (itemHobby == "") return;
    props.handleCallback({
      hobbyName: itemHobby,
      hours: 0,
      mins: 0,
      sec: 0,
      id: crypto.randomUUID(),
    });
    //clears the input after click
    setItemHobby("");
  };

  return (
    <form>
      <input
        onChange={handleInput}
        type="text"
        name="inputHobby"
        value={itemHobby}
        required
      />
      <button onClick={handleClick}>Create new Hobby</button>
    </form>
  );
};

export default CreateHobby;
