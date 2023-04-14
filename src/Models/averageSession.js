
class UserAverageSession {
  constructor(day, sessionLength) {
    this.day = day;
    this.sessionLength = sessionLength;
  }
}

class AverageSessionData {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = [sessions];
  }

  addSession(day, sessionLength) {
    this.sessions.push(new UserAverageSession(day, sessionLength));
  }
}

export {AverageSessionData, UserAverageSession};