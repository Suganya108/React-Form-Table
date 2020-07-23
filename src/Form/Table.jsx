import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Table } from 'react-bootstrap';

//import { details } from './Register.jsx';

export const TableView = (data, changeState) => {
  console.log("table::", data);
  if (changeState!=undefined)
    changeState()
  return (
    <div >
      <Table
        striped
        bordered
        hover
        style={{ width: "90%", fontSize: "12px" }}
      >
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Retyped Password</th>
            <th>Marital status</th>
            <th>Choice of food</th>
            <th>Country</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((detail,index) =>
          <tr key={index}>
            <td>{detail.firstName}</td>
            <td>{detail.lastName}</td>
            <td>{detail.email}</td>
            <td>{detail.password}</td>
            <td>{detail.retype_password}</td>
            <td>{detail.maritalStatus}</td>
            <td>{detail.choiceOfFood}</td>
            <td>{detail.country}</td>
            <td>{detail.state}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
