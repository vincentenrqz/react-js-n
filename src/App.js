import React, { useState } from "react";

/* Styles */
import "./Index.css";

/* Components */
import Card from "./Card";

// useState = React Hooks

const App = () => {
  //   const [count, setCount] = useState(0); // can assign array, number, objects or any type of data types
  //   const [user, setUser] = useState("");

  //   const handleOnClick = () => {
  //     setCount(count + 1);
  //   };

  //   const handleOnChange = (e) => {
  //     setUser(e.target.value);
  //   };

  return (
    // <React.Fragment>
    //   <div class="m-12">
    //     <div>Increment: {count}</div>
    //     <button
    //       onClick={handleOnClick}
    //       class="bg-blue-500 px-3 py-2 rounded-lg shadow-md"
    //     >
    //       Increment
    //     </button>
    //     <br />
    //     <input name="user" onChange={handleOnChange} value={user} />
    //   </div>
    // </React.Fragment>
    <div className="flex flex-row gap-4 justify-center m-12">
      <Card
        name="Vincent"
        age={23}
        gender="Male"
        profession="Software Engineer"
      />
      <Card name="Anna" age={23} gender="Female" profession="Human Resource" />
      <Card
        name="Michael"
        age={20}
        gender="Male"
        profession="Future Software Engr."
      />
      <Card
        name="Lykka"
        age={28}
        gender="Female"
        profession="Industrial Engineer"
      />
    </div>
  );
};

export default App;
