import React from "react";
import { useState } from "react";


const Home = () => {
  let Outputs = [
    "Why did the actor fall through the floorboards?",
    "They were going through a stage ",

    "Why did a scarecrow win a Nobel prize?",
    "He was outstanding in his field!",

    "Why are peppers the best at archery?",
    "Because they habanero!",

    "What did the duck say after she bought chapstick?",
    "Put it on my bill!",

    "Why did an old man fall in a well?",
    "Because he couldn’t see that wel",

    " What do you call a fake noodle?",
    "An impasta!",

    " What did the three-legged dog say when he walked into a saloon? ",
    "“I’m looking for the man who shot my paw!” ",

    "How do you tell the difference between a bull and a cow ",

    "What’s red and smells like blue paint Red paint ",

    "What’s the difference between a hippo",
  ];

  let output = Outputs[Math.floor(Math.random() * Outputs.length)];

  const [text, setText] = useState("");
  const [ans, setAns] = useState("");

  const reset= ()=>{
    setAns("");
  }

  const handelSubmit = () => {
    console.log(text);
    setText("");
    output = Outputs[Math.floor(Math.random() * Outputs.length)];
    setAns( output );
  };

  return (
    <>
      <h2 className=" container my-3">
        <small className="text-body-secondary ">
          Enter any SQL queries to see the results
        </small>
      </h2>
      <div className="input-group container my-3">
        <input
          type="text"
          value={text}
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handelSubmit}
          disabled={text.length<5}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" onClick={handelSubmit}>
              query 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={handelSubmit}>
            query 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={handelSubmit}>
            query 3
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={handelSubmit}>
            query 4
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <h2 className=" container my-3">
          <small className="text-body-secondary ">
            Your solution will appear here
          </small>
        </h2>
        <div className="input-group mb-3">
          <input
            type="text"
            value={ans}
            className="form-control"
            id="formGroupExampleInput"
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
