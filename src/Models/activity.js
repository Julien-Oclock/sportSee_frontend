class UserActivitySession {
    constructor(day, kilogram, calories) {
      this.day = day;
      this.kilogram = kilogram;
      this.calories = calories;
    }
  }


class ActivityMainData {
    constructor(userId, sessions) {
       this.userId = userId;
       this.sessions = [sessions];         
    }

    addSession(day, kilogram, calories) {
        this.sessions.push(new UserActivitySession(day, kilogram, calories));
      }
}

export { ActivityMainData, UserActivitySession};