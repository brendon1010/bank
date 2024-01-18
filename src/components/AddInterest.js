import { Button } from "react-bootstrap";
import { AppContext } from "../AllContext/AppContext";
import { useContext } from "react";

export default function AddInterest() {
  const [balance, setBalance] = useContext(AppContext); //retrieve balance state

  return (
    //create button and add calculations for adding 5% interest
    <Button
      variant="success"
      onClick={() => {
        setBalance(Math.floor(balance + balance * (5 / 100)));
      }}
    >
      Add 5% interest
    </Button>
  );
}
