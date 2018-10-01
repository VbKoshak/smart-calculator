class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.arrInts = [];
    this.arrSignas = [];
    this.length = 0;
    this.arrInts.push(initialValue);
  }

  valueOf() {
      for (let i = this.length - 1; i >= 0; i--)
      {
          if (this.arrSignas[i] == '^')
          {
              //console.log("pow");
              let temp = Math.pow(this.arrInts[i], this.arrInts[i+1]);
              this.arrInts[i] = temp;
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              this.length--;
              i++;
          }
      };
      for (let i = 0; i < this.length; i++)
      {
          if (this.arrSignas[i] == '*')
          {
              //console.log("multiple");
              let temp = this.arrInts[i]*this.arrInts[i+1];
              this.arrInts[i] = temp;
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              this.length--;
              i--;
          };
      };
      for (let i = 0; i < this.length; i++)
      {
          if (this.arrSignas[i] == '/')
          {
              //console.log("devide");
              let temp = this.arrInts[i]/this.arrInts[i+1];
              this.arrInts[i] = temp;
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              i--;
              this.length--;
          }
      };
      for (let i = 0; i < this.length; i++)
      {
          if (this.arrSignas[i] == 'plus')
          {
              //console.log("add");
              this.arrInts[i] += this.arrInts[i+1];
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              i--;
              this.length--;
          }
          if (this.arrSignas[i] =='minus')
          {
              //console.log("subtract");
              this.arrInts[i] -= this.arrInts[i+1];
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              i--;
              this.length--;
          }
      };
     // console.log(this.arrInts);
      return this.arrInts[0];
  }

  add(number) {
    // your implementation
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = 'plus';
    this.length++;
    return this;
  }

  subtract(number) {
    // your implementation
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = 'minus';
    this.length++;
    return this;
  }

  multiply(number) {
    // your implementation
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '*';
    this.length++;
    return this;
  }

  devide(number) {
    // your implementatio
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '/';
    this.length++;
    return this;
  }

  pow(number) {
    // your implementation
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '^';
    this.length++;
    return this;
  }
}

module.exports = SmartCalculator;
