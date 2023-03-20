class UserMainData {
    constructor(id, firstName, lastName, age, todayScore, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
      this.id = id;
      this.userInfos = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      this.todayScore = todayScore;
      this.keyData = {
        calorieCount: calorieCount,
        proteinCount: proteinCount,
        carbohydrateCount: carbohydrateCount,
        lipidCount: lipidCount,
      };
  }
}

export default UserMainData;

