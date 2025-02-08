// import Message from "./Message";

import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
// import { Alert } from "./components/Alert";

// import ListGroup from "./components/ListGroup";

function App()
{
  // let items=["Tiruchengode","Erode","Salem"];
  // const handleOnSelectItem=(item)=>
  // {
  //   console.log(item);
  // }


  const [AlertVisible,setAlertVisible]=useState(false);

  return( 
  // <div><ListGroup items={items} heading="Cities" onSelectItem={handleOnSelectItem}/></div>
  // <div>
  //   <Alert>
  //     Hello World
  //   </Alert>
  // </div>
  <div>
    {AlertVisible && <Alert onClose={()=> setAlertVisible(false)}>My alert</Alert>}
    <Button color={"danger"} onClick={() => setAlertVisible(true) }>Submit</Button>
  </div>
  );
}
export default App;