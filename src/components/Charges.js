import { Button } from "react-bootstrap";
import { AppContext } from "../AllContext/AppContext";
import { useContext } from "react";

export default function Charges() {
  const [balance, setBalance] = useContext(AppContext); //retrieve balance state

  return (
    //create button to calculate 15% charge
    <Button
      className="bold"
      variant="warning"
      onClick={() => {
        setBalance(Math.floor(balance - balance * (15 / 100)));
      }}
    >
      15% bank charge
    </Button>
  );
}
