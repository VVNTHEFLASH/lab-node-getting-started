class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    
  //  this.list.push(item);

  //  this.list.sort((a,b) => a - b)
  }
  get(position) {
    if(position > this.length - 1){
      throw new Error("OutOfBounds")
    }
    else{
      return this.items[position];
    }
    // return this.list[position];
  }
  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
      let max = this.items[0];
      for(let i=1; i<this.length;i++){
        if(this.items[i] > max){
          max = this.items[i];
        }
      }
      return max;
    }
  }
  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
      let min = this.items[0];
      for(let i=1; i<this.length;i++){
        if(this.items[i] < min){
          min = this.items[i];
        }
      }
      return min;
    }
  }
  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
     let sum = this.items.reduce((a,b) => a+b, 0);
     return (sum/this.length);
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    else{
      return this.items.reduce((a,b) => a+b, 0)
    }
  }
  
};

module.exports = SortedList;
