import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AllContext/AppContext";
import { AmountContext } from "../AllContext/AmountContext";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AddInterest from "./AddInterest";
import Charges from "./Charges";
import { Container, Col, Row, Button } from "react-bootstrap";

export default function Layout() {
  const [actions, setActions] = useState(null); //state to change text to deposit or withdraw
  const [showInput, setShowInput] = useState(false); //state to show input box or not
  const [showDep, setShowDep] = useState(false); //state to show or hide deposit
  const [showWit, setShowWit] = useState(false); //state to show or hide withdraw
  const [showCharge, setShowCharge] = useState(false); //state to show or hide bank charge
  const [showInt, setShowInt] = useState(false); //state to show or hide interest
  const show = false;

  const [balance] = useContext(AppContext); //retrieve balance state
  const [amount, setAmount] = useContext(AmountContext); //retrieve amont state

  function handleChange(e) {
    //function to update the amount state
    setAmount(e.target.value);
  }

  useEffect(() => {
    //effect for if balance becomes negative
    let fontCol = document.querySelector(".cash");
    if (balance < 0) {
      alert("balance is below zero, please deposit amount due");
      fontCol.style.color = "red";
    } else if (balance >= 0) {
      //for if the is positive again
      fontCol.style.color = "green";
    }
  }, [balance]); //balance as dependency

  function dep() {
    //function to show deposit and hide everything else
    setActions("deposit");
    setShowInput(true);
    setShowDep(true);
    setShowWit(false);
    setShowInt(false);
    setShowCharge(false);
  }

  function wit() {
    //function to show withdraw and hide everything else
    setActions("withdraw");
    setShowInput(true);
    setShowWit(true);
    setShowDep(false);
    setShowInt(false);
    setShowCharge(false);
  }

  function int() {
    //function to show interest and hide everything else
    setShowInput(false);
    setShowInt(true);
    setShowWit(false);
    setShowDep(false);
    setShowCharge(false);
  }

  function cha() {
    //function to show bank charge and hide everything else
    setShowInput(false);
    setShowCharge(true);
    setShowInt(false);
    setShowWit(false);
    setShowDep(false);
  }

  function clearInp() {
    //function to remove input and any button as an exit button
    setShowInput(false);
    setShowDep(false);
    setShowCharge(false);
    setShowInt(false);
    setShowWit(false);
  }

  return (
    <div>
      <br />
      <br />
      {show && <h1>{amount}</h1>}
      <Container>
        <Row>
          <Col xs={8} className="bal">
            <img
              className="logo"
              src="https://i.pinimg.com/736x/25/de/87/25de8737c29e2e1d5f572b50a6e6efc5.jpg"
              alt="logo"
            />
            <h1 className="balText">
              Current balance:
              <br /> <span className="cash">R{balance}</span>
              <br />
            </h1>
            {showInput && (
              <>
                <h2>Enter Amount to {actions}</h2>
                <Button variant="danger" onClick={clearInp}>
                  X
                </Button>
                <input onChange={handleChange} id="myInput" type="number" />{" "}
              </>
            )}
            {showDep && <Deposit />}
            {showWit && <Withdraw />}
            {showInt && (
              <>
                <Button variant="danger" onClick={clearInp}>
                  X
                </Button>
                <AddInterest />
              </>
            )}
            {showCharge && (
              <>
                <Button variant="danger" onClick={clearInp}>
                  X
                </Button>
                <Charges />
              </>
            )}
          </Col>
          <Col xs={3} className="stat">
            <Button variant="secondary" onClick={dep} className="options">
              Deposit
            </Button>
            <br />
            <br />
            <Button variant="secondary" onClick={wit} className="options">
              Withdraw
            </Button>
            <br />
            <br />
            <Button variant="secondary" onClick={int} className="options">
              Add Interest
            </Button>
            <br />
            <br />
            <Button variant="secondary" onClick={cha} className="options">
              Bank Charge
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
