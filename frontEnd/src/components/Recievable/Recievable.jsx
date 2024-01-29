// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const Customer = ({ selectedComponent, setSelectedComponent }) => {
  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
    window.location.hash = componentName;
    
  };


  {
    /* fetch info before if needed*/
  }
  const [RecievableDataData, setRecievableDataData] = useState([]);

  useEffect(() => {
    // Fetch Customer data from the database
    fetchRecievableDataInfo();
  }, []);

  const fetchRecievableDataInfo = async () => {
    console.log("OKkkkk")
    try {
      const  RecievableData = await axios.get("http://localhost:8080/api/getInvoiceDue");
      setRecievableDataData(RecievableData.data);
      return  RecievableData 
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error gracefully, e.g., display an error message
      return [];
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">All Recievable Data </a>
        </div>
  
      </div>
      <table className="table w-full mt-4">
        <thead>
          <tr>
            <th>InvoiceId</th>
            <th>CustomerDisplayName</th>
            <th>DueAmount</th>
            <th>Total</th>
            <th>dueDate</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {RecievableDataData.map((RecievableData, index) => (
            <tr key={RecievableData.id}>
              <td>{RecievableData.id}</td>
              <td>{RecievableData.CustomerDisplayName}</td>
              <td>{RecievableData.DueAmount}</td>
              <td>{RecievableData.Total}</td>
              <td>{RecievableData.DueDate}</td>
              <td>{RecievableData.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Customer;

