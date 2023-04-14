import React, { useState, useEffect } from "react";
import {getAverageSession, getUSerMainData, getUserActivity, getUserPerformance } from "../../Api/apiCalls";

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
import GoalChart from "../../Components/Graph/GoalChart";
import AverageSessionChart from "../../Components/Graph/AverrageSessionChart";
import PerformanceChart from "../../Components/Graph/PerformanceChart";

function MainDataComponent() {

  const [userMainData, setUserMainData] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // user activity (weight, calories, etc...)
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);
  const [userActivity, setUserActivity] = useState([]);

  //  daily sessions (average)
  const [averageSessions, setAverageSessions] = useState([]);
  const [isLoadingAverageSessions, setIsLoadingAverageSessions] = useState(true);

  // user performance(average, best, worst)
  const [userPerformance, setUserPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

  //goal data
  const [goalData, setGoalData] = useState([]);
  const [isLoadingGoalData, setIsLoadingGoalData] = useState(true);

  useEffect(() => {

    // Fetching user main data
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

    // Fetching user average sessions
    const fetchAverageSessions = async () => {
      try {
          const response = await getAverageSession(12);
          setAverageSessions(response);
          setIsLoadingAverageSessions(false);
      } catch (error) {
          console.error(error);
      }
    };
    fetchAverageSessions();

    // Fetching user activity data
    const fetchUserActivity = async () => {
      try {
          const response = await getUserActivity(12);
          setUserActivity(response);
          setIsLoadingActivity(false);
      } catch (error) {
          console.error(error);
      }
    };
    fetchUserActivity();


    // Fetching user performance data
    const fetchUserPerformance = async () => {
      try {
          const response = await getUserPerformance(12);
          setUserPerformance(response);
          setIsLoadingPerformance(false);
      } catch (error) {
          console.error(error);
      }
    };
    fetchUserPerformance();
  },[]);

  if (isLoadingUser && isLoadingActivity && isLoadingPerformance) {
    return <div className="loader">Loading...</div>;
  }
  const { firstName } = userMainData.userInfos;
  const {calorieCount, proteinCount, carbohydrateCount, lipidCount} = userMainData.keyData;
  const { sessions } = userActivity;
  const { todayScore } = userMainData

  console.log(todayScore);


  const averageSessionsData = averageSessions;

  
  return (
    <div className="page-content">
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
            <div className="dashboard__inline-wrapper">
              {!isLoadingAverageSessions && <AverageSessionChart data={averageSessionsData}/>}
              {!isLoadingPerformance && <PerformanceChart data={userPerformance}/>}
              <GoalChart data={todayScore}/>
            </div>
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
