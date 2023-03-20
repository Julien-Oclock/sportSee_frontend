import api from './api';
import userModel from '../Models/user.js';
import activityModel from '../Models/activity.js';
import performanceModel from '../Models/performance.js';
import averageSessionModel from '../Models/averageSession.js';

const getUSerMainData = async (id) => {   
    const response = await api.get(`/user/${id}`)
        .then((res) => res.data )
        .catch((err) => console.log(err));
    const userData = response.data;
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
    const response = await api.get(`/users/${id}/activity`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    const activityData = response.data;
    const activity = new activityModel(
        activityData.userId,
        activityData.sessions
    )
    return activity;
}

const getUserPerformance = async (id) => {
    const response = await api.get(`/users/${id}/performance`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    const performanceData = response.data;
    const performance = new performanceModel(
        performanceData.userId,
        performanceData.sessions
    )
    return performance;
}

const getAverageSession = async (id) => {
    const response = await api.get(`/users/${id}/average-sessions`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    const averageSessionData = response.data;
    const averageSession = new averageSessionModel(
        averageSessionData.userId,
        averageSessionData.sessions
    )
    return averageSession;
}

export { getUSerMainData, getUserActivity, getUserPerformance, getAverageSession}