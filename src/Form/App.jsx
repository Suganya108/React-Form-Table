import React, { useState } from 'react';

import Form from './Register';
import { details } from './Register.jsx';
import { TableView } from './Table';

function App1() {
  
  const [state,setState]=useState("no")
  return (
    <div >
      <h1>React Form and Table</h1>
      <div
        style={{ marginTop: "40px",marginBottom:"100px", width:"40%", height: "1100px", float: "left", color: "red", padding: "30px", border: "1px solid black" }}
      >
        <Form
           changeState={() => {setState("yes")}}
        />
      </div>
      <div
        style={{ marginTop: "40px", height: "1100px", width: "60%", float: "left",paddingLeft:"20px", color: "blue" }}
      >
        {state === "no" ? <Table
          
        /> : <Table changeState={() => { setState("no") }} />}
        
      </div>
    </div>
  );
}

function Table({ changeState}) {
  return TableView(details, changeState);
}

export default App1;
