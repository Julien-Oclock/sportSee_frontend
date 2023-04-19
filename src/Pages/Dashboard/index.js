import React, { useContext, useState, useEffect } from "react";
//import apiCalls from "../../Api/apiCalls";

// Context
import { SourceContext } from "../../Service/dataService.js";

// stylesheet
import "./styles.scss";

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

/**
 * Component for the dashboard page.
 * @returns {JSX} The dashboard page.
 */
function MainDataComponent() {
  const source = useContext(SourceContext);

  const [userMainData, setUserMainData] = useState({});
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // user activity (weight, calories, etc...)
  const [isLoadingActivity, setIsLoadingActivity] = useState(true);
  const [userActivity, setUserActivity] = useState([]);

  //  daily sessions (average)
  const [averageSessions, setAverageSessions] = useState([]);
  const [isLoadingAverageSessions, setIsLoadingAverageSessions] =
    useState(true);

  // user performance(average, best, worst)
  const [userPerformance, setUserPerformance] = useState([]);
  const [isLoadingPerformance, setIsLoadingPerformance] = useState(true);

  useEffect(() => {
    /**
     * Fetching user main data
     * @async
     * @function fetchData
     * @returns {Promise} The formated response from the API.
     */
    async function fetchData() {
      try {
        const response = await source.source.getUSerMainData(12);
        setUserMainData(response);
        setIsLoadingUser(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    /**
     * Fetching average sessions data
     * @async
     * @function fetchAverageSessions
     * @returns {Promise} The formated response from the API.
     */
    const fetchAverageSessions = async () => {
      try {
        const response = await source.source.getAverageSession(12);
        setAverageSessions(response);
        setIsLoadingAverageSessions(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAverageSessions();

    /**
     * Fetching user activity data
     * @async
     * @function fetchUserActivity
     * @returns {Promise} The formated response from the API.
     */
    const fetchUserActivity = async () => {
      try {
        const response = await source.source.getUserActivity(12);
        setUserActivity(response);
        setIsLoadingActivity(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserActivity();

    /**
     * Fetching user performance data
     * @async
     * @function fetchUserPerformance
     * @returns {Promise} The formated response from the API.
     */
    const fetchUserPerformance = async () => {
      try {
        const response = await source.source.getUserPerformance(12);
        setUserPerformance(response);
        setIsLoadingPerformance(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserPerformance();
  }, [source.source]);

  if (isLoadingUser && isLoadingActivity && isLoadingPerformance) {
    return <div className="loader">Loading...</div>;
  }
  const { firstName } = userMainData.userInfos;
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    userMainData.keyData;
  const { sessions } = userActivity;
  const { todayScore } = userMainData;
  const averageSessionsData = averageSessions;
  console.log(averageSessionsData);

  return (
    <div className="page-content">
      <Navbar />
      <Sidebar />
      <div className="main">
        <div className="main__title-wrapper">
          <h1 className="main__title-item">
            {" "}
            Bonjour <span className="main__firstname">{firstName}</span>
          </h1>
          <aside className="main__title-aside">
            {" "}
            Félicitation ! Vous avez explosé vos objectifs hier. &#128079;{" "}
          </aside>
        </div>
        <div className="dashboard">
          <div className="dashboard__graph">
            {!isLoadingActivity && <WeightGraph sessions={sessions} />}
            <div className="dashboard__inline-wrapper">
              {!isLoadingAverageSessions && (
                <AverageSessionChart data={averageSessionsData} />
              )}
              {!isLoadingPerformance && (
                <PerformanceChart data={userPerformance} />
              )}
              <GoalChart data={todayScore} />
            </div>
          </div>
          <div className="dashboard__cards">
            <NutritionCard
              imgUrl={cal}
              value={calorieCount}
              unit="Kcal"
              type="Calories"
            />
            <NutritionCard
              imgUrl={prot}
              value={proteinCount}
              unit="g"
              type="Proteines"
            />
            <NutritionCard
              imgUrl={carb}
              value={carbohydrateCount}
              unit="g"
              type="Glucides"
            />
            <NutritionCard
              imgUrl={fat}
              value={lipidCount}
              unit="g"
              type="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDataComponent;
