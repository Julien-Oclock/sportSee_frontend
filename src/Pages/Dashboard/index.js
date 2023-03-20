import React, { useState, useEffect } from "react";
import {getUSerMainData } from "../../Api/apiCalls";

//Component
import Navbar from "../../Components/Navbar";

function MainDataComponent() {
  const [userMainData, setUserMainData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUSerMainData(12);
        setUserMainData(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { firstName, lastName, age } = userMainData.userInfos;
  return (
    <div>
      <Navbar />
      <h1> {lastName} {firstName} {age} ans</h1>
    </div>
  )
}

export default MainDataComponent;
