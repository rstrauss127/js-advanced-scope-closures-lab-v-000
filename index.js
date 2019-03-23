function produceDrivingRange(blockRange) {
    return function (x, y) {
      if(Math.abs(x-y)>=blockRange) {
        return `within range by ${Math.abs(x-y)}`;
      } else {
          return `${Math.abs(x-y)} out of range`;
      }
    }
  }
