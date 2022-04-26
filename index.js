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
    if(position > this.items.length - 1){
      throw new Error("OutOfBounds")
    }
    else{
      return this.items[position];
    }
    // return this.list[position];
  }
  max() {

  }
  min() {

  }
  avg() {
    
   
  }

  sum() {
  
  }
  
};

module.exports = SortedList;
