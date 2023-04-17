import mock from '../Data/data.js'


  /**
   * @param {string} userId
   * @returns {object} user data
   */
  export const getUserData = (userId) => {
    const userData = mock.USER_MAIN_DATA.find(
      (res) => res.id === parseInt(userId)
    )
    return userData
  }

  /**
   * @param {string} userId
   * @returns {object} user activity
   */
  export const getUserActivity = (userId) => {
    const userActivity = mock.USER_ACTIVITY.find(
      (res) => res.userId === parseInt(userId)
    )
    return userActivity
  }

  /**
   * @param {string} userId
   * @returns {object} user average sessions
   */
  export const getUserAverageSessions = (userId) => {
    const userAverage = mock.USER_AVERAGE_SESSIONS.find(
      (res) => res.userId === parseInt(userId)
    )
    return userAverage
  }

  /**
   * @param {string} userId
   * @returns {object} user performance
   */
  export const getUserPerformance = (userId) => {
    const userPerformance = mock.USER_PERFORMANCE.find(
      (res) => res.userId === parseInt(userId)
    )
    return userPerformance
  }
