/**
 * @fileoverview This file contains the AverageSessionData class, which is used to store the daily session length for a user.
 */

/**
 * @class UserAverageSession
 * @classdesc For each day, the daily session length is stored.
 */
class UserAverageSession {
  constructor(day, sessionLength) {
    /**
     * @property {string} day - The day of the session.
     * @property {number} sessionLength - The average session length. 
     */
    this.day = day;
    this.sessionLength = sessionLength;
  }
}

/**
 * @class AverageSessionData
 * @classdesc The main data of the user's average session length.
 */
class AverageSessionData {
  constructor(userId, sessions) {
    /**
     * @property {string} userId - The id of the user.
     * @property {Array} sessions - The length of the user's session.
     */
    this.userId = userId;
    this.sessions = [...sessions];
  }

  /**
   * function used to add a session to the user's average session length
   * @param {day} day - the day of the session
   * @param {sessionLength} sessionLength - the length of the session 
   */
  addSession(day, sessionLength) {
    this.sessions.push(new UserAverageSession(day, sessionLength));
  }
}

export {AverageSessionData, UserAverageSession};