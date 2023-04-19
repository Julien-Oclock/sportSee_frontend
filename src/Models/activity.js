/**
 * @class UserActivitySession
 * @classdesc For each daily session, the user's weight and the calories burned are stored.
 */
class UserActivitySession {
  constructor(day, kilogram, calories) {
    /**
     * @property {string} day - The day of the session.
     * @property {number} kilogram - The weight of the user during the session.
     * @property {number} calories - The calories burned during the session.
     */
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}

/**
 * @class ActivityMainData
 * @classdesc The main data of the user's daily activity.
 */
class ActivityMainData {
  constructor(userId, sessions) {
    /**
     * @property {string} userId - The id of the user.
     * @property {Array} sessions - The sessions of the user.
     */
    this.userId = userId;
    this.sessions = [...sessions];
  }

  addSession(day, kilogram, calories) {
    this.sessions.push(new UserActivitySession(day, kilogram, calories));
  }
}

export { ActivityMainData, UserActivitySession };
