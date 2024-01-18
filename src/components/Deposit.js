import { useContext } from "react";
import { AppContext } from "../AllContext/AppContext";
import { AmountContext } from "../AllContext/AmountContext";
import { Button } from "react-bootstrap";

export default function Deposit() {
  const [balance, setBalance] = useContext(AppContext); //retrieve balance state
  const [amount] = useContext(AmountContext); //retrieve amount state

  return (
    //button to add the amount to the balance
    <Button
      variant="success"
      onClick={() => {
        setBalance(balance + parseFloat(amount));
      }}
    >
      Deposit
    </Button>
  );
}
