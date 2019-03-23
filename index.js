function produceDrivingRange(blockRange) {
    return function (x, y) {
      if(Math.abs(parseInt(x)-parseInt(y)) <= blockRange) {
        return `within range by ${blockRange - Math.abs(parseInt(x)-parseInt(y))}`;
      }
      else {
        return `${blockRange - Math.abs(parseInt(x)-parseInt(y))} out of range`;
      }
    }
  }
