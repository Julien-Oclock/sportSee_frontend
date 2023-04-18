import mock from '../Data/data.js'


const mockCall = {
  /**
   * get user main data
   * @param {string} userId
   * @returns {object} user data
   */
   getUSerMainData : (userId) => {
      const userData = mock.USER_MAIN_DATA.find(
        (res) => res.id === parseInt(userId)
      )
      return userData
    },
  
    /**
     * get user activity data
     * @param {string} userId
     * @returns {object} user activity
     */
    getUserActivity : (userId) => {
      const userActivity = mock.USER_ACTIVITY.find(
        (res) => res.userId === parseInt(userId)
      )
      return userActivity
    },
  
    /**
     * get user average sessions data
     * @param {string} userId
     * @returns {object} user average sessions
     */
    getAverageSession : (userId) => {
      const userAverage = mock.USER_AVERAGE_SESSIONS.find(
        (res) => res.userId === parseInt(userId)
      )
      return userAverage
    },
  
    /**
     * Get user performance data
     * @param {string} userId
     * @returns {object} user performance
     */
    getUserPerformance : (userId) => {
      const userPerformance = mock.USER_PERFORMANCE.find(
        (res) => res.userId === parseInt(userId)
      )
      return userPerformance
    }
}

export default mockCall;




