import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);
  

  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  
  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
            {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchAPI;
