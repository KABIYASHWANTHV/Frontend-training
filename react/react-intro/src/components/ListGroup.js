// import { Fragment } from "react";

import { useState } from "react";

// import { MouseEvent } from "react"; 

function ListGroup({items,heading,onSelectItem}) {

    // items=[];


    const [selectedIndex , setSelectedIndex]= useState(null);
    // const message=items.length===0 ? <p>No items found</p> : null;

    // 
    

    // if(items.length===0)
    //     return(
    //         <>
    //             <h1>List</h1>
    //             <p>No items found</p>
    //         </>
    //     );


    // const handleClick = (event) => console.log(event);

  return(
    <>
        <h1>{heading}</h1>
    

        {/* {items.length===0 ? <p>No items found</p> : null} */}

        {/* {message} */}
    
        {/* {GetMessage()} */}

        

        {items.length===0 && <p>No items found</p>}

        <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        </ul>
    </>
  );
}



export default ListGroup;
