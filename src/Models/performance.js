/**
 * @class UserPerformance
 * @classdesc User performance model
 */
class UserPerformance {
  constructor(userId, kind, data) {
    /**
     * @property {string} userId - The id of the user.
     * @property {Object} kind - The kind of performance
     * @property {Array} data - The data of the performance
     */
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
  /**
   *
   * @param {Object} kind - The kind of performance
   * @returns {Object} - The data of the performance
   */
  getPerformanceValue(kind) {
    const dataItem = this.data.find((item) => item.kind === kind);
    return dataItem ? dataItem.value : null;
  }
}

export default UserPerformance;
