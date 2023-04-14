class UserPerformance {
    constructor(userId, kind, data) {
      this.userId = userId;
      this.kind = kind;
      this.data = data;
    }
  
    getPerformanceValue(kind) {
      const dataItem = this.data.find((item) => item.kind === kind);
      return dataItem ? dataItem.value : null;
    }
  }

export default UserPerformance;
