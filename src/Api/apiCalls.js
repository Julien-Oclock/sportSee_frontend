import userModel from "../Models/user.js";
import { UserActivitySession, ActivityMainData } from "../Models/activity.js";
import UserPerformance from "../Models/performance.js";
import {
  AverageSessionData,
  UserAverageSession,
} from "../Models/averageSession.js";
import api from "./Api.js";

const apiCalls = {
  /**
   * Retrieves the main data of a user.
   * @async
   * @function
   * @param {string} id - The id of the user.
   * @returns {object} The main data of the user (firstname, age, daily score ...).
   */
  getUSerMainData: async (id) => {
    const response = await api.get(`/user/${id}`);
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
  },

  /**
   * Retrieves the activity dat of a user.
   * @async
   * @function
   * @param {string} id - The id of the user.
   * @returns {object} The activity data of the user.
   */
  getUserActivity: async (id) => {
    const response = await api.get(`/user/${id}/activity`);
    const data = response.data.data;
    const sessions = data.sessions.map(({ day, kilogram, calories }) => {
      return new UserActivitySession(day, kilogram, calories);
    });

    const activityMainData = new ActivityMainData(id, sessions);

    return activityMainData;
  },

  /**
   * Retrieves the performance data of a user.
   * @async
   * @function
   * @param {string} id - The id of the user.
   * @returns {Promise<{UserPerformance, Object}>} The performance data of the user and an object containing the values of performance for each type.
   */
  getUserPerformance: async (id) => {
    const response = await api.get(`/user/${id}/performance`);
    const performanceData = response.data.data;
    const { kind, data } = performanceData;
    const userPerformance = new UserPerformance(id, kind, data);
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
    };
    // Retourne un objet contenant les valeurs de performance pour chaque type
    return performanceValues;
  },

  /**
   * Retrieves the average session data of a user.
   * @async
   * @function
   * @param {string} id - The id of the user.
   * @returns {object} The average session data of the user.
   */
  getAverageSession: async (id) => {
    const response = await api.get(`/user/${id}/average-sessions`);
    const data = response.data.data;
    const sessions = data.sessions.map(
      (session) => new UserAverageSession(session.day, session.sessionLength)
    );
    const averageSessionData = new AverageSessionData(id, sessions);
    return averageSessionData;
  },
};

export default apiCalls;
