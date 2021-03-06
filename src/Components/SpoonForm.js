import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const SpoonForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [spoonName, setSpoonName] = useState("")

    const spoonerize = e => {
        console.log(firstName);
        console.log(lastName)

        const fnamefletter = firstName.charAt(0);
        const fnfl = fnamefletter.toUpperCase();
        console.log(fnfl)
        const fnamesletter = firstName.charAt(1);
        const fnsl = fnamesletter.toUpperCase();
        console.log(fnsl)
        const snamefletter = lastName.charAt(0);
        const snfl = snamefletter.toUpperCase();
        console.log(snfl)
        const snamesletter = lastName.charAt(1);
        const snsl = snamesletter.toUpperCase();
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
        if (fnsl.includes("A") || fnsl.includes("E") || fnsl.includes("I") || fnsl.includes("O") || fnsl.includes("U")) {
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
        if (snsl.includes("A") || snsl.includes("E") || snsl.includes("I") || snsl.includes("O") || snsl.includes("U")) {
            console.log("second name second letter is vowel");
            snslStatus = "vowel";
        } else {
            console.log("second name second letter is const");
            snslStatus = "const";
        };

        var fnameSpoonerized
        var lnameSpoonerized

        if (fnflStatus === "const" && fnslStatus === "const" && snflStatus === "const" && snslStatus === "const") {
            fnameSpoonerized = lastName.charAt(0) + lastName.charAt(1) + firstName.substring(2);
            lnameSpoonerized = firstName.charAt(0) + firstName.charAt(1) + lastName.substring(2);
            console.log("NUMBER 1");
        }
        else if (fnflStatus === "const" && fnslStatus === "const" && snflStatus === "const" && snslStatus === "vowel") {
            fnameSpoonerized = lastName.charAt(0) + firstName.substring(2);
            lnameSpoonerized = firstName.charAt(0) + firstName.charAt(1) + lastName.substring(1);
            console.log("NUMBER 2")
        }
        else if (fnflStatus === "const" && fnslStatus === "const" && snflStatus === "vowel") {
            fnameSpoonerized = firstName.substring(2);
            lnameSpoonerized = firstName.charAt(0) + firstName.charAt(1) + lastName.substring(0);
            console.log("NUMBER 3");
        }
        else if (fnflStatus === "const" && fnslStatus === "vowel" && snflStatus === "const" && snslStatus === "const") {
            fnameSpoonerized = lastName.charAt(0) + lastName.charAt(1) + firstName.substring(1);
            lnameSpoonerized = firstName.charAt(0) + lastName.substring(2);
            console.log("NUMBER 4");
        }
        else if (fnflStatus === "const" && fnslStatus === "vowel" && snflStatus === "const" && snslStatus === "vowel") {
            fnameSpoonerized = lastName.charAt(0) + firstName.substring(1);
            lnameSpoonerized = firstName.charAt(0) + lastName.substring(1);
            console.log("NUMEBR 5");
        }
        else if (fnflStatus === "const" && fnslStatus === "vowel" && snflStatus === "vowel") {
            fnameSpoonerized = firstName.substring(1);
            lnameSpoonerized = firstName.charAt(0) + lastName.substring(0);
            console.log("NUMBER 6");
        }
        else if (fnflStatus === "vowel" && snflStatus === "const" && snslStatus === "const") {
            fnameSpoonerized = lastName.charAt(0) + lastName.charAt(1) + firstName.substring(0);
            lnameSpoonerized = lastName.substring(2);
            console.log("NUMBER 7")
        }
        else if (fnflStatus === "vowel" && snflStatus === "const" && snslStatus === "vowel") {
            fnameSpoonerized = lastName.charAt(0) + firstName.substring(0);
            lnameSpoonerized = lastName.substring(1);
            console.log("NUMBER 8");
        }
        else if (fnflStatus === "vowel" && snflStatus === "vowel") {
            fnameSpoonerized = lastName.charAt(0) + firstName.substring(1);
            lnameSpoonerized = firstName.charAt(0) + lastName.substring(1);
            console.log("NUMBER 9")
        }

        var fspoon = fnameSpoonerized.toUpperCase()
        var lspoon = lnameSpoonerized.toUpperCase()
        setSpoonName(fspoon + " " + lspoon)
    }

    return (
        <div className="body">
            <Form>
                <Form.Group>
                    <Form.Label>First Name:   </Form.Label>
                    <Form.Control type="text" onChange={e => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name:   </Form.Label>
                    <Form.Control type="text" onChange={e => setLastName(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={e => spoonerize()}>Spoonerize Me!</Button>
            </Form>
            <h3>{spoonName ? spoonName : null}</h3>
        </div>
    )
};

export default SpoonForm;