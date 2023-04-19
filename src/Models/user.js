/**
 * @class UserMainData
 * @classdesc Model for the user's main data.
 */
class UserMainData {
  constructor(
    id,
    firstName,
    lastName,
    age,
    todayScore,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount
  ) {
    /**
     * @property {string} id - The id of the user.
     * @property {Object} userInfos - The user's informations.
     * @property {number} todayScore - The user's score for today.
     * @property {Object} keyData - The user's key data.
     * @property {number} keyData.calorieCount - The user's calorie count.
     * @property {number} keyData.proteinCount - The user's protein count.
     * @property {number} keyData.carbohydrateCount - The user's carbohydrate count.
     * @property {number} keyData.lipidCount - The user's lipid count.
     */
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
