import React, { useState, useEffect } from "react";
import {getUSerMainData, getUserActivity } from "../../Api/apiCalls";

// stylesheet
import './styles.scss'

// Images
import cal from "../../assets/images/calories-icon.png";
import prot from "../../assets/images/protein-icon.png";
import carb from "../../assets/images/carbs-icon.png";
import fat from "../../assets/images/fat-icon.png";

//Component
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import NutritionCard from "../../Components/NutritionCard";

// graph
import WeightGraph from "../../Components/Graph/WeightGraph";

function MainDataComponent() {

  const [userMainData, setUserMainData] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);

  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUSerMainData(12);
        setUserMainData(response);
        setIsLoadingUser(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    const fetchActivityData = async () => {
      try {
          const response = await getUserActivity(12);
          setUserActivity(response);
          setIsLoadingActivity(false);
      } catch (error) {
          console.error(error);
      }
    }
    fetchActivityData();
  }, []);

  if (isLoadingUser && isLoadingActivity) {
    return <div className="loader">Loading...</div>;
  }
  const { firstName } = userMainData.userInfos;
  const {calorieCount, proteinCount, carbohydrateCount, lipidCount} = userMainData.keyData;

  const { sessions } = userActivity;

  
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main">
        <div className="main__title-wrapper">
          <h1 className="main__title-item"> Bonjour <span className="main__firstname">{firstName}</span></h1>
          <aside className="main-title-aside"> Félicitation ! Vous avez explosé vos objectifs hier. &#128079; </aside>
        </div>
        <div className="dashboard">
          <div className="dashboard__graph">
            {!isLoadingActivity && <WeightGraph sessions={sessions[0]}/>}
          </div>
          <div className="dashboard__cards">
            <NutritionCard imgUrl={cal} value={calorieCount} unit="Kcal" type="Calories" />
            <NutritionCard imgUrl={prot} value={proteinCount} unit="g" type="Proteines" />
            <NutritionCard imgUrl={carb} value={carbohydrateCount} unit="g" type="Glucides" />
            <NutritionCard imgUrl={fat} value={lipidCount} unit="g" type="Lipides" />
          </div>
        </div>    
      </div>      
    </div>
  )
}

export default MainDataComponent;
