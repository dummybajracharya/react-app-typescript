import React, { useContext } from "react";
import { AddressContext } from "./Parent";

interface Prop{
  // onAddressChange is method to change the address
  onAddressChange: (newAddress: string) => void
}

const Child = ({onAddressChange}: (Prop)) => {
  const addressContext = useContext(AddressContext);
  return (
    <div>
      <h1>Child</h1>
      <p> My Address is {addressContext}</p>
      <button onClick={() => onAddressChange('kathmandu')}> Change Address</button>
    </div>
  );
};

export default Child;
