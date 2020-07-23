import React from 'react';

import Form, { TableView } from './Register';

//import Table1 from './Table';

function App1() {
    return (
        <div style={{ width: "100%", height: "1000px", padding: "20px" }}>
            <h1>React Form and Table</h1>
            <div
                style={{ marginTop: "60px", width: "50%", height: "1200px", float: "left", color: "red", padding: "30px", border: "1px solid black" }}
            >
                <Form />
            </div>
            <div
                style={{ marginTop: "60px", width: "50%", height: "1200px", float: "right", color: "blue", padding: "30px", border: "1px solid black" }}
            >
                <TableView/>
            </div>
        </div>
    );
}

export default App1;
