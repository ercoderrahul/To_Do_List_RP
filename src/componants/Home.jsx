import React, { useState } from "react";
import "./home.css";

// const Home = () => {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleClick(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems(previewValues => {
//       return [...previewValues, inputText];
//     });
//     setInputText("");
//   }
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleClick} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <ul>
//         <li>
//           {items.map((todoitem) => (
//             <li>{todoitem}</li>
//           ))}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Home;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleClick(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((previewItems) => {
      return [...previewItems, inputText];
    });
    setInputText("");
  }
  return (
    <div>
      <div className="cotainer">
        <div className="heading">
          <h1>TO-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleClick} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>ADD</span>
          </button>
        </div>
      </div>
      <ul>
        {items.map(todositme => <li>{todositme}</li>)}
      </ul>
    </div>
  );
};

export default Home;
