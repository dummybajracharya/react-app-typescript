import { createContext, useState } from "react";
import Child from "./Child";


// createContext should be created outside the component 
// we need to export the AddressContext so that it can import into child component. 
export const AddressContext = createContext<string | undefined>(undefined);

const Parent = () => {
  const [address, setAddress] = useState("kogarah");
  // How to pass address from Parent into Child without passing it as props.
  

  // Update address via passing method as Prop in Child component.
  // Note: we can also achieve the same result by passing method through AddressContext 
  // It is good practice to modify or update the state within the same component where that component is defined. 
  // Here the changeAddress will be trigger via the onAddressChange property supply to Child as prop or method.
  const changeAddress = (newAddress: string) =>{
    setAddress(newAddress);
  }

  return (
    <>
      <AddressContext.Provider value={address}>
        <h1> Parent Component </h1>
        <Child onAddressChange = {changeAddress}/>
      </AddressContext.Provider>
    </>
  );
};

export default Parent;
