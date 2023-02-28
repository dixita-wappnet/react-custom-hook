import { useState } from "react";


function useCustomCounter(counter){
  
   const [count, setCount] = useState(counter);
   const handleIncrement = () => {

     setCount(count + 1)

   }
   return ([count, handleIncrement]);
   
}

export default useCustomCounter;