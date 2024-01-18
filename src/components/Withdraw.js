import { AppContext } from "../AllContext/AppContext";
import { useContext } from "react";
import { AmountContext } from "../AllContext/AmountContext";
import { Button } from "react-bootstrap";

export default function Withdraw() {
  const [balance, setBalance] = useContext(AppContext); //retrieve balance state
  const [amount] = useContext(AmountContext); //retrieve amount state

  return (
    //button to subtract amount from balance
    <Button
      variant="success"
      onClick={() => {
        setBalance(balance - amount);
      }}
    >
      Withdraw
    </Button>
  );
}
