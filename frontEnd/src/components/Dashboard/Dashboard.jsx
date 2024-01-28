import React, { useState,useEffect } from "react";
import "./Dashboard.css"; // Import custom CSS for circle styling
import axios from "axios";

function Dashboard() {
  // Assuming you have the account data fetched from the database
  const [cashAccount, setCashAccount] = useState(0);
  const [receivableAccount, setReceivableAccount] = useState(0);
  const [payableAccount, setPayableAccount] = useState(0);
  const [assetAccount, setAssetAccount] = useState(0);

  useEffect(() => {
    fetchAvailableCashAccountInfo();
    fetchAvailablePayableAccountInfo();
    fetchAvailableReciableAccountInfo();
    fetchAvailableAssetAccountInfo();
    // .then((items) => setFetchedItems(items))
    //.catch((error) => {
    // console.error("Error fetching items:", error);
    // Handle error, e.g., display an error message
    // });
  }, []);

  const fetchAvailableAssetAccountInfo = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const data = {
        AccountName: "Asset",
      };
      const response = await axios.post(
        `http://localhost:8080/api/getInfoByAccountName`,
        data
      );
      //setCashAccount(response.dataValues.Value);
      setAssetAccount(response.data.Value);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAvailableReciableAccountInfo = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const data = {
        AccountName: "AccountReceivable",
      };
      const response = await axios.post(
        `http://localhost:8080/api/getInfoByAccountName`,
        data
      );
      //setCashAccount(response.dataValues.Value);
      setReceivableAccount(response.data.Value);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAvailableCashAccountInfo = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const data = {
        AccountName: "Cash",
      };
      const response = await axios.post(
        `http://localhost:8080/api/getInfoByAccountName`,
        data
      );
      //setCashAccount(response.dataValues.Value);
      setCashAccount(response.data.Value);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAvailablePayableAccountInfo = async () => {
    // Replace with your actual function to fetch items from the database
    try {
      const data = {
        AccountName: "AccountPayable",
      };
      const response = await axios.post(
        `http://localhost:8080/api/getInfoByAccountName`,
        data
      );
      //setCashAccount(response.dataValues.Value);
      setPayableAccount(response.data.Value);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row justify-around mb-8">
        {/* First row with 3 circles */}
        <div className="Circle  bg-gray-500">
          <h2 className="text-center font-bold underline">Cash Account</h2>
          <p className="text-center">{cashAccount}</p>
        </div>
        <div className="Circle">
          <h2 className="text-center font-bold underline">
            Receivable Account
          </h2>
          <p className="text-center">{receivableAccount}</p>
        </div>
        <div className="Circle">
          <h2 className="text-center font-bold underline">Payable Account</h2>
          <p className="text-center">{payableAccount}</p>
        </div>
      </div>

      <div className="Circle">
        {/* Second row with 1 circle */}
        <h2 className="text-center font-bold underline">Asset Account</h2>
        <p className="text-center">{assetAccount}</p>
      </div>
    </div>
  );
}

export default Dashboard;
