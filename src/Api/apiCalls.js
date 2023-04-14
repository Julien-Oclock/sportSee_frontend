import api from './api';
import userModel from '../Models/user.js';
import  { UserActivitySession, ActivityMainData } from '../Models/activity.js';
import UserPerformance from '../Models/performance.js';
import {AverageSessionData, UserAverageSession} from '../Models/averageSession.js';

const getUSerMainData = async (id) => {   
    const response = await api.get(`/user/${id}`);
    // console.log(response);
    // if (!response.status === 200) {
    //     throw new Error(`Unable to fetch average session for user ${id}`);
    //   }
    const userData = response.data.data;
    const MainData = new userModel(
        userData.id,
        userData.userInfos.firstName,
        userData.userInfos.lastName,
        userData.userInfos.age,
        userData.todayScore,
        userData.keyData.calorieCount,
        userData.keyData.proteinCount,
        userData.keyData.carbohydrateCount,
        userData.keyData.lipidCount
    );
    return MainData;
}

const getUserActivity = async (id) => {
    const response = await api.get(`/user/${id}/activity`)
    // if (!response.status === 200) {
    //     throw new Error(`Unable to fetch average session for user ${id}`);
    //   }
    const data = response.data.data;
    const sessions = data.sessions.map(({ day, kilogram, calories }) => {
        return new UserActivitySession(day, kilogram, calories);
      });
    
      const activityMainData = new ActivityMainData(id, sessions);
    
      return activityMainData;
}

const getUserPerformance = async (id) => {
   const response = await api.get(`/user/${id}/performance`);
//    if (!response.ok) {
//     throw new Error(`Unable to fetch user performance for user ${id}`);
//   }
  const performanceData = response.data.data;
  const { kind, data } = performanceData;
  const userPerformance = new UserPerformance(id, kind, data);
  // Utilisation de la méthode getPerformanceValue pour récupérer les valeurs de performance
  const cardioValue = userPerformance.getPerformanceValue(1);
  const energyValue = userPerformance.getPerformanceValue(2);
  const enduranceValue = userPerformance.getPerformanceValue(3);
  const strengthValue = userPerformance.getPerformanceValue(4);
  const speedValue = userPerformance.getPerformanceValue(5);
  const intensityValue = userPerformance.getPerformanceValue(6);
  const performanceValues = {
    cardio: cardioValue,
    energy: energyValue,
    endurance: enduranceValue,
    strength: strengthValue,
    speed: speedValue,
    intensity: intensityValue,
  }
  // Retourne un objet contenant les valeurs de performance pour chaque type
  return userPerformance, performanceValues;
}

const getAverageSession = async (id) => {
    const response = await api.get(`/user/${id}/average-sessions`);
    // if (!response.ok) {
    //   throw new Error(`Unable to fetch average session for user ${id}`);
    // }
    const data = response.data.data;
    console.log(data);
    const sessions = data.sessions.map((session) => new UserAverageSession(session.day, session.sessionLength));
    const averageSessionData = new AverageSessionData(id, sessions);
    console.log(averageSessionData);
    return averageSessionData;

}

export { getUSerMainData, getUserActivity, getUserPerformance, getAverageSession};