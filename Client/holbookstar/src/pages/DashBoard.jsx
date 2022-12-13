import React, { useState, useEffect } from "react";
import { Action} from "@remix-run/router";
import axios from "axios";
import { Table } from "react-bootstrap";
import useRetrieveHook from "../action/useLoginHook";
// import {useRetrieveHook} from "../action/dashBoardAdmin";
function DashBoard() {
  const [data, setData] = useState({});
  const [user] = useRetrieveHook();

  // const [data, setData] = useState();
  // const [tableRow, setTableRow] = React.useState(data);
  // const {count, setCount} = React.useState(4);
  // const [user] = useRetrieveHook();
  // const [tableData, setTableData] = useState([]);

  //   const [dog, setdog] = useState();
  //to retrieve information
  // need ccreate an empty dependancy

  //load empty function
  //work as loader
  const BACKEND_PATH = "https://localhost:8900";
  const[tableRow, setTableRow] = React.useState(data);
  useEffect(() => {
    //user();
    const data = async (id, username) => {

     return axios 
      .post(`${BACKEND_PATH}/login`, {id, username})
      .then((response) => {
        if(response.data && response.data.accessToken) {
        localStorage.setItem("data", response.data);
        setData(response.data);
        }
        else {
          throw Error("no token or doesn't exist");
        }
      })
        .catch((err) => console.warn(err));
        
      }
      setTableRow([...tableRow, data]);
      <tbody>
        {
          tableRow.map((data)=> {
            return(
        
            )
          })
        }
      </tbody>

      return[data];
  }, []);

  useEffect((data) => {
    console.log("hello world");
    console.log(user);
    // setTableRow([...tableRow]);
    
    // LOAD API LOGIC
  }, []);
  //DashBoard goes heere


  return (
    <div className="dashboard">
      <h1>Tabble goes here</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
            <td>{tableRow.map((data) =>(<tr
            >
              <td>{data.id}</td>
              <td>{data.username}</td>

            </tr>))}
            
              </td>
          </tr> 
          
        </tbody>
      </Table>
      <div className="p-2">
        <p>Need to add table that has a working thing in there</p>
      </div>
      <div className="p-2">
      
        {/* <button onClick={() => {
          const newData = {id: id, username: ' '}
        }} */}
        <p>Delete</p>
        <p>Update</p>
      </div>
    </div>
  );
}
export default DashBoard;
