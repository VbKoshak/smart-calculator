class SmartCalculator {
  constructor(initialValue) {
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
              this.arrInts[i] += this.arrInts[i+1];
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              i--;
              this.length--;
          }
          if (this.arrSignas[i] =='minus')
          {
              this.arrInts[i] -= this.arrInts[i+1];
              this.arrInts.splice(i+1,1);
              this.arrSignas.splice(i,1);
              i--;
              this.length--;
          }
      };
      return this.arrInts[0];
  }

  add(number) {
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = 'plus';
    this.length++;
    return this;
  }

  subtract(number) {
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = 'minus';
    this.length++;
    return this;
  }

  multiply(number) {
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '*';
    this.length++;
    return this;
  }

  devide(number) {
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '/';
    this.length++;
    return this;
  }

  pow(number) {
    this.arrInts[this.length + 1] = number;
    this.arrSignas[this.length] = '^';
    this.length++;
    return this;
  }
}

module.exports = SmartCalculator;
