
import './App.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'


function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [spoonName, setSpoonName] = useState("")

  const spoonerize = e => {
    console.log(firstName);
    console.log(lastName)

    const fnfl = firstName.charAt(0);
    console.log(fnfl)
    const fnsl = firstName.charAt(1);
    console.log(fnsl)
    const snfl = lastName.charAt(0);
    console.log(snfl)
    const snsl = lastName.charAt(1);
    console.log(snsl)

    var fnflStatus = "constant"
    var fnslStatus = "constant"
    var snflStatus = "constant"
    var snslStatus = "constant"

    if (fnfl.includes("A") || fnfl.includes("E") || fnfl.includes("I") || fnfl.includes("O") || fnfl.includes("U")) {
      console.log("first name first letter is vowel");
      fnflStatus = "vowel"
    } else {
      console.log("first name first letter is const");
      fnflStatus = "const";
    };
    if (fnsl.includes("a") || fnsl.includes("e") || fnsl.includes("i") || fnsl.includes("o") || fnsl.includes("u")) {
      console.log("first name second letter is vowel");
      fnslStatus = "vowel";
    } else {
      console.log("first name second letter is const");
      fnslStatus = "const";
    };
    if (snfl.includes("A") || snfl.includes("E") || snfl.includes("I") || snfl.includes("O") || snfl.includes("U")) {
      console.log("second name first letter is vowel");
      snflStatus = "vowel";
    } else {
      console.log("second name first letter is const");
      snflStatus = "const";
    };
    if (snsl.includes("a") || snsl.includes("e") || snsl.includes("i") || snsl.includes("o") || snsl.includes("u")) {
      console.log("second name second letter is vowel");
      snslStatus = "vowel";
    } else {
      console.log("second name second letter is const");
      snslStatus = "const";
    };

    
  }

  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" onChange={e => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" onChange={e => setLastName(e.target.value)} />
          <Button onClick={e => spoonerize()}>Spoonerize Me!</Button>
        </Form.Group>
      </Form>
      <h3>{spoonName ? spoonName : null}</h3>
    </div>
  );
}

export default App;
