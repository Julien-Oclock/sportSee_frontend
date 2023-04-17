import mock from '../Data/data.js'


const mockCall = {
    /**
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




