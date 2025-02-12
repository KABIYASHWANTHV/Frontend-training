
import { useState , useEffect } from "react";
const Api_Fetch = () => {
    const [products,setProducts]=useState([]);
    useEffect(() =>{
        const fetchproducts= async()=>{
        try{  
            const res = await fetch('');
            const data= await JSON.stringify;
            setProducts(data);
        }
        catch(e)
        {
            console.log(e);
        }
    };
    fetchproducts();
    },[])
  return (
    <div>Api_Fetch</div>
  )
}
