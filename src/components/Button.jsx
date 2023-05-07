import { useState } from "react";

const Button = () => {
    let [count,setCount] = useState(0);
    return ( 
        <>
        <div className="container flex justify-center m-4">
        <button onClick={()=>setCount(count+1)} className="rounded-3xl bg-red-500 p-3 hover:bg-red-400 transition-all ease-in-out font-semibold">Clicked {count} times</button>
        </div>
        </>
     );
}
 
export default Button;