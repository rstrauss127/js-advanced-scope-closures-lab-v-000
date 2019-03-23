function produceDrivingRange(blockRange) {
    return function (x, y) {
      if(Math.abs(parseInt(x)-parseInt(y)) <= blockRange) {
        return `within range by ${blockRange - Math.abs(parseInt(x)-parseInt(y))}`;
      }
      else {
        return `${Math.abs(parseInt(x)-parseInt(y))-blockRange} blocks out of range`;
      }
    }
  }

function produceTipCalculator(percent) {
  return function (total) {
    return percent*total;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
